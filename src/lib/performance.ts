/**
 * Utilidades de Rendimiento - InnovaTec
 * 
 * Helpers para optimizar el rendimiento del sitio.
 * 
 * Principios aplicados:
 * - Single Responsibility: Optimización de rendimiento
 * - Separation of Concerns: Lógica separada del UI
 */

/**
 * Carga diferida de imágenes
 */
export function lazyLoadImages(): void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback para navegadores sin IntersectionObserver
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const image = img as HTMLImageElement;
      if (image.dataset.src) {
        image.src = image.dataset.src;
        image.removeAttribute('data-src');
      }
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px',
  });

  const images = document.querySelectorAll('img[data-src]');
  images.forEach((img) => imageObserver.observe(img));
}

/**
 * Preconecta a dominios externos importantes
 */
export function preconnectExternal(): void {
  if (typeof document === 'undefined') return;

  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  domains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Optimiza fuentes con font-display: swap
 */
export function optimizeFonts(): void {
  if (typeof document === 'undefined') return;

  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Inicializa todas las optimizaciones de rendimiento
 */
export function initPerformance(): void {
  if (typeof window === 'undefined') return;

  lazyLoadImages();
  preconnectExternal();
  optimizeFonts();
}

