/**
 * Sistema de Internacionalización (i18n) - InnovaTec
 * 
 * Helper para gestionar traducciones ES/EN.
 * 
 * Principios aplicados:
 * - Single Responsibility: Gestión centralizada de traducciones
 * - Open/Closed: Extensible para nuevos idiomas
 * - Dependency Inversion: Abstracción de almacenamiento
 */

export type SupportedLocale = 'es' | 'en';

export interface TranslationDictionary {
  [key: string]: string | TranslationDictionary;
}

export interface I18nConfig {
  defaultLocale: SupportedLocale;
  supportedLocales: SupportedLocale[];
  storageKey: string;
}

/**
 * Configuración por defecto del sistema i18n
 */
const defaultConfig: I18nConfig = {
  defaultLocale: 'es',
  supportedLocales: ['es', 'en'],
  storageKey: 'innovatac-locale',
};

/**
 * Clase para gestionar internacionalización
 * Implementa patrón Singleton para mantener consistencia
 */
class I18nManager {
  private static instance: I18nManager;
  private currentLocale: SupportedLocale;
  private translations: Map<SupportedLocale, TranslationDictionary> = new Map();
  private config: I18nConfig;

  private constructor(config: I18nConfig = defaultConfig) {
    this.config = config;
    this.currentLocale = this.detectLocale();
  }

  /**
   * Obtiene la instancia única del manager
   */
  public static getInstance(config?: I18nConfig): I18nManager {
    if (!I18nManager.instance) {
      I18nManager.instance = new I18nManager(config);
    }
    return I18nManager.instance;
  }

  /**
   * Detecta el idioma preferido del usuario
   * Prioridad: cookie > localStorage > navigator > default
   */
  private detectLocale(): SupportedLocale {
    // En servidor, intentar leer de cookies
    if (typeof window === 'undefined') {
      // En Astro, podemos leer de Astro.cookies si está disponible
      // Por ahora, retornamos default y usaremos cookies en el cliente
      return this.config.defaultLocale;
    }

    // 1. Verificar cookie (para que funcione en servidor)
    const cookieValue = this.getCookie(this.config.storageKey);
    if (cookieValue && this.isSupportedLocale(cookieValue)) {
      return cookieValue as SupportedLocale;
    }

    // 2. Verificar localStorage
    const stored = localStorage.getItem(this.config.storageKey);
    if (stored && this.isSupportedLocale(stored)) {
      return stored as SupportedLocale;
    }

    // 3. Verificar navigator
    if (navigator.language) {
      const browserLang = navigator.language.split('-')[0];
      if (this.isSupportedLocale(browserLang)) {
        return browserLang as SupportedLocale;
      }
    }

    // 4. Fallback a default
    return this.config.defaultLocale;
  }

  /**
   * Obtiene el valor de una cookie
   */
  private getCookie(name: string): string | null {
    if (typeof document === 'undefined') {
      return null;
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  /**
   * Establece una cookie
   */
  private setCookie(name: string, value: string, days: number = 365): void {
    if (typeof document === 'undefined') {
      return;
    }
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  /**
   * Verifica si un locale está soportado
   */
  private isSupportedLocale(locale: string): locale is SupportedLocale {
    return this.config.supportedLocales.includes(locale as SupportedLocale);
  }

  /**
   * Carga las traducciones para un locale
   */
  public async loadTranslations(
    locale: SupportedLocale,
    translations: TranslationDictionary
  ): Promise<void> {
    this.translations.set(locale, translations);
  }

  /**
   * Obtiene una traducción por clave
   * Soporta notación de punto para objetos anidados
   */
  public t(key: string, locale?: SupportedLocale): string {
    const targetLocale = locale || this.currentLocale;
    const translations = this.translations.get(targetLocale);

    if (!translations) {
      console.warn(`No translations found for locale: ${targetLocale}`);
      return key;
    }

    const value = this.getNestedValue(translations, key);

    if (typeof value === 'string') {
      return value;
    }

    // Fallback a español si no se encuentra
    if (targetLocale !== 'es') {
      const esTranslations = this.translations.get('es');
      if (esTranslations) {
        const fallbackValue = this.getNestedValue(esTranslations, key);
        if (typeof fallbackValue === 'string') {
          return fallbackValue;
        }
      }
    }

    // Último fallback: devolver la clave
    console.warn(`Translation key not found: ${key}`);
    return key;
  }

  /**
   * Obtiene un valor anidado usando notación de punto
   */
  private getNestedValue(
    obj: TranslationDictionary,
    path: string
  ): string | TranslationDictionary | undefined {
    return path.split('.').reduce((current, key) => {
      if (current && typeof current === 'object' && key in current) {
        return current[key];
      }
      return undefined;
    }, obj as any);
  }

  /**
   * Cambia el locale actual
   */
  public setLocale(locale: SupportedLocale): void {
    if (!this.isSupportedLocale(locale)) {
      console.warn(`Unsupported locale: ${locale}`);
      return;
    }

    this.currentLocale = locale;

    if (typeof window !== 'undefined') {
      // Guardar en localStorage
      localStorage.setItem(this.config.storageKey, locale);
      // Guardar en cookie para que funcione en servidor
      this.setCookie(this.config.storageKey, locale);
      // Disparar evento personalizado para notificar cambios
      window.dispatchEvent(new CustomEvent('localechange', { detail: { locale } }));
    }
  }

  /**
   * Obtiene el locale actual
   */
  public getLocale(): SupportedLocale {
    return this.currentLocale;
  }

  /**
   * Obtiene todos los locales soportados
   */
  public getSupportedLocales(): SupportedLocale[] {
    return [...this.config.supportedLocales];
  }
}

/**
 * Instancia singleton exportada
 */
export const i18n = I18nManager.getInstance();

/**
 * Helper function para usar en componentes
 * @param key - Clave de traducción (soporta notación de punto)
 * @param locale - Locale opcional (usa el actual si no se especifica)
 * @returns Traducción o clave si no se encuentra
 */
export function t(key: string, locale?: SupportedLocale): string {
  return i18n.t(key, locale);
}

/**
 * Helper function para cambiar locale
 */
export function setLocale(locale: SupportedLocale): void {
  i18n.setLocale(locale);
}

/**
 * Helper function para obtener locale actual
 */
export function getLocale(): SupportedLocale {
  return i18n.getLocale();
}

