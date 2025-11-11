/**
 * Gestión de Cookies y Consentimiento - InnovaTec
 * 
 * Helper para gestionar el consentimiento de cookies y analytics.
 * 
 * Principios aplicados:
 * - Single Responsibility: Gestión centralizada de cookies
 * - Open/Closed: Extensible para nuevos tipos de cookies
 */

export type CookieType = 'necessary' | 'analytics' | 'marketing';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export interface CookieConfig {
  storageKey: string;
  expirationDays: number;
}

/**
 * Configuración por defecto
 */
const defaultConfig: CookieConfig = {
  storageKey: 'innovatac-cookie-consent',
  expirationDays: 365,
};

/**
 * Clase para gestionar consentimiento de cookies
 * Implementa patrón Singleton
 */
class CookieManager {
  private static instance: CookieManager;
  private config: CookieConfig;
  private consent: CookieConsent | null = null;

  private constructor(config: CookieConfig = defaultConfig) {
    this.config = config;
    this.consent = this.loadConsent();
  }

  /**
   * Obtiene la instancia única del manager
   */
  public static getInstance(config?: CookieConfig): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager(config);
    }
    return CookieManager.instance;
  }

  /**
   * Carga el consentimiento desde localStorage
   */
  private loadConsent(): CookieConsent | null {
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      const stored = localStorage.getItem(this.config.storageKey);
      if (stored) {
        const consent = JSON.parse(stored) as CookieConsent;
        // Verificar si el consentimiento sigue siendo válido
        const expirationTime = consent.timestamp + this.config.expirationDays * 24 * 60 * 60 * 1000;
        if (Date.now() < expirationTime) {
          return consent;
        }
      }
    } catch (error) {
      console.warn('Error loading cookie consent:', error);
    }

    return null;
  }

  /**
   * Guarda el consentimiento en localStorage
   */
  private saveConsent(consent: CookieConsent): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(this.config.storageKey, JSON.stringify(consent));
      this.consent = consent;

      // Disparar evento personalizado
      window.dispatchEvent(
        new CustomEvent('cookieconsent', {
          detail: { consent },
        })
      );
    } catch (error) {
      console.warn('Error saving cookie consent:', error);
    }
  }

  /**
   * Establece el consentimiento
   */
  public setConsent(consent: Partial<CookieConsent>): void {
    const newConsent: CookieConsent = {
      necessary: true, // Siempre true (cookies necesarias)
      analytics: consent.analytics ?? false,
      marketing: consent.marketing ?? false,
      timestamp: Date.now(),
    };

    this.saveConsent(newConsent);
  }

  /**
   * Obtiene el consentimiento actual
   */
  public getConsent(): CookieConsent | null {
    return this.consent;
  }

  /**
   * Verifica si hay consentimiento guardado
   */
  public hasConsent(): boolean {
    return this.consent !== null;
  }

  /**
   * Verifica si un tipo de cookie está permitido
   */
  public isAllowed(type: CookieType): boolean {
    if (!this.consent) {
      return false;
    }

    // Las cookies necesarias siempre están permitidas
    if (type === 'necessary') {
      return true;
    }

    return this.consent[type] ?? false;
  }

  /**
   * Resetea el consentimiento (para testing o cambios de política)
   */
  public resetConsent(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.config.storageKey);
      this.consent = null;
    }
  }
}

/**
 * Instancia singleton exportada
 */
export const cookieManager = CookieManager.getInstance();

/**
 * Helper function para establecer consentimiento
 */
export function setCookieConsent(consent: Partial<CookieConsent>): void {
  cookieManager.setConsent(consent);
}

/**
 * Helper function para obtener consentimiento
 */
export function getCookieConsent(): CookieConsent | null {
  return cookieManager.getConsent();
}

/**
 * Helper function para verificar si hay consentimiento
 */
export function hasCookieConsent(): boolean {
  return cookieManager.hasConsent();
}

/**
 * Helper function para verificar si un tipo está permitido
 */
export function isCookieAllowed(type: CookieType): boolean {
  return cookieManager.isAllowed(type);
}

