/**
 * Gestión de Tema (Claro/Oscuro) - InnovaTec
 * 
 * Helper para gestionar el cambio de tema con persistencia.
 * 
 * Principios aplicados:
 * - Single Responsibility: Gestión centralizada del tema
 * - Open/Closed: Extensible para nuevos temas
 */

export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeConfig {
  storageKey: string;
  attribute: string;
}

/**
 * Configuración por defecto
 */
const defaultConfig: ThemeConfig = {
  storageKey: 'innovatac-theme',
  attribute: 'data-theme',
};

/**
 * Clase para gestionar el tema
 * Implementa patrón Singleton
 */
class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: Theme;
  private config: ThemeConfig;
  private systemPreference: 'light' | 'dark';

  private constructor(config: ThemeConfig = defaultConfig) {
    this.config = config;
    this.systemPreference = this.detectSystemPreference();
    this.currentTheme = this.detectTheme();
    this.applyTheme();
  }

  /**
   * Obtiene la instancia única del manager
   */
  public static getInstance(config?: ThemeConfig): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager(config);
    }
    return ThemeManager.instance;
  }

  /**
   * Detecta la preferencia del sistema
   */
  private detectSystemPreference(): 'light' | 'dark' {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  /**
   * Detecta el tema actual
   * Prioridad: localStorage > system > light
   */
  private detectTheme(): Theme {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const stored = localStorage.getItem(this.config.storageKey);
    if (stored && this.isValidTheme(stored)) {
      return stored as Theme;
    }

    return 'auto';
  }

  /**
   * Verifica si un tema es válido
   */
  private isValidTheme(theme: string): theme is Theme {
    return ['light', 'dark', 'auto'].includes(theme);
  }

  /**
   * Aplica el tema al documento
   */
  private applyTheme(): void {
    if (typeof document === 'undefined') {
      return;
    }

    const effectiveTheme = this.getEffectiveThemeInternal();
    const html = document.documentElement;

    // Remover clases anteriores
    html.classList.remove('light', 'dark');
    html.removeAttribute(this.config.attribute);

    // Aplicar nuevo tema
    if (this.currentTheme === 'auto') {
      html.setAttribute(this.config.attribute, 'auto');
    } else {
      html.setAttribute(this.config.attribute, effectiveTheme);
      html.classList.add(effectiveTheme);
    }

    // Disparar evento personalizado
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('themechange', {
          detail: { theme: this.currentTheme, effective: effectiveTheme },
        })
      );
    }
  }

  /**
   * Establece el tema
   */
  public setTheme(theme: Theme): void {
    if (!this.isValidTheme(theme)) {
      console.warn(`Invalid theme: ${theme}`);
      return;
    }

    this.currentTheme = theme;

    if (typeof window !== 'undefined') {
      localStorage.setItem(this.config.storageKey, theme);
    }

    this.applyTheme();
  }

  /**
   * Alterna entre light y dark (ignora 'auto')
   */
  public toggleTheme(): void {
    const effective = this.getEffectiveThemeInternal();
    const newTheme: Theme = effective === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Obtiene el tema actual
   */
  public getTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Obtiene el tema efectivo (método público)
   */
  public getEffectiveTheme(): 'light' | 'dark' {
    return this.getEffectiveThemeInternal();
  }

  /**
   * Obtiene el tema efectivo (método privado interno)
   */
  private getEffectiveThemeInternal(): 'light' | 'dark' {
    if (this.currentTheme === 'auto') {
      return this.systemPreference;
    }
    return this.currentTheme;
  }

  /**
   * Escucha cambios en la preferencia del sistema
   */
  public watchSystemPreference(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      this.systemPreference = e.matches ? 'dark' : 'light';
      if (this.currentTheme === 'auto') {
        this.applyTheme();
      }
    });
  }
}

/**
 * Instancia singleton exportada
 */
export const themeManager = ThemeManager.getInstance();

/**
 * Helper function para establecer tema
 */
export function setTheme(theme: Theme): void {
  themeManager.setTheme(theme);
}

/**
 * Helper function para alternar tema
 */
export function toggleTheme(): void {
  themeManager.toggleTheme();
}

/**
 * Helper function para obtener tema actual
 */
export function getTheme(): Theme {
  return themeManager.getTheme();
}

/**
 * Helper function para obtener tema efectivo
 */
export function getEffectiveTheme(): 'light' | 'dark' {
  return themeManager.getEffectiveTheme();
}

