/**
 * Cliente i18n - InnovaTec
 * 
 * Helper para actualizar traducciones en el cliente después de que la página se carga.
 * Necesario para modo estático donde el servidor no puede leer cookies.
 */

export type SupportedLocale = 'es' | 'en';

/**
 * Obtiene el locale desde cookie o localStorage
 */
export function getClientLocale(): SupportedLocale {
  if (typeof window === 'undefined') {
    return 'es';
  }

  // 1. Verificar cookie
  const cookieValue = getCookie('innovatac-locale');
  if (cookieValue === 'es' || cookieValue === 'en') {
    return cookieValue;
  }

  // 2. Verificar localStorage
  const stored = localStorage.getItem('innovatac-locale');
  if (stored === 'es' || stored === 'en') {
    return stored;
  }

  // 3. Verificar navigator
  if (navigator.language) {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es' || browserLang === 'en') {
      return browserLang;
    }
  }

  // 4. Fallback
  return 'es';
}

/**
 * Obtiene el valor de una cookie
 */
function getCookie(name: string): string | null {
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
 * Actualiza el contenido de la página con las traducciones correctas
 */
export async function updatePageTranslations(locale: SupportedLocale): Promise<void> {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Cargar traducciones
    const [commonEs, commonEn, pagesEs, pagesEn] = await Promise.all([
      import('@/locales/es/common.json'),
      import('@/locales/en/common.json'),
      import('@/locales/es/pages.json'),
      import('@/locales/en/pages.json'),
    ]);

    const common = locale === 'es' ? commonEs.default : commonEn.default;
    const pages = locale === 'es' ? pagesEs.default : pagesEn.default;

    // Actualizar elementos con atributos data-i18n
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        const translation = getNestedValue(common, key) || getNestedValue(pages, key);
        if (translation && typeof translation === 'string') {
          element.textContent = translation;
        }
      }
    });

    // Actualizar atributo lang del HTML
    document.documentElement.lang = locale;
  } catch (error) {
    console.warn('Error updating translations:', error);
  }
}

/**
 * Obtiene un valor anidado usando notación de punto
 */
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return current[key];
    }
    return undefined;
  }, obj);
}

