/**
 * Utilidades de Accesibilidad - InnovaTec
 * 
 * Helpers para mejorar la accesibilidad del sitio.
 * 
 * Principios aplicados:
 * - Single Responsibility: Utilidades de accesibilidad
 * - Separation of Concerns: Lógica separada del UI
 */

/**
 * Inicializa el manejo de teclado para navegación
 */
export function initKeyboardNavigation(): void {
  if (typeof window === 'undefined') return;

  // Manejar navegación con teclado en elementos interactivos
  document.addEventListener('keydown', (e) => {
    // Escape para cerrar modales/menús
    if (e.key === 'Escape') {
      const openMenus = document.querySelectorAll('[aria-expanded="true"]');
      openMenus.forEach((menu) => {
        const button = menu as HTMLElement;
        button.setAttribute('aria-expanded', 'false');
        button.focus();
      });
    }

    // Tab para navegación secuencial
    if (e.key === 'Tab') {
      const focusableElements = document.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      // Si está en el último elemento y presiona Tab, ir al primero
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  });
}

/**
 * Añade skip link para saltar al contenido principal
 */
export function addSkipLink(): void {
  if (typeof document === 'undefined') return;

  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Saltar al contenido principal';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';
  skipLink.setAttribute('aria-label', 'Saltar al contenido principal');
  
  document.body.insertBefore(skipLink, document.body.firstChild);
}

/**
 * Inicializa todas las utilidades de accesibilidad
 */
export function initAccessibility(): void {
  if (typeof window === 'undefined') return;

  initKeyboardNavigation();
  addSkipLink();

  // Respetar prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add('reduce-motion');
  }

  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  });
}

