/**
 * Utilidades de Seguridad - InnovaTec
 * 
 * Helpers para mejorar la seguridad del sitio.
 * 
 * Principios aplicados:
 * - Single Responsibility: Utilidades de seguridad
 * - Separation of Concerns: Lógica separada del UI
 */

/**
 * Sanitiza HTML removiendo scripts y eventos peligrosos
 */
export function sanitizeHTML(html: string): string {
  if (typeof window === 'undefined') {
    // En servidor, usar escape básico
    return html
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // En cliente, usar DOMPurify si está disponible
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

/**
 * Escapa HTML para prevenir XSS
 */
export function escapeHTML(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Valida URL para prevenir ataques
 */
export function isValidURL(url: string): boolean {
  try {
    const parsed = new URL(url);
    // Solo permitir http y https
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Sanitiza URL removiendo javascript: y otros protocolos peligrosos
 */
export function sanitizeURL(url: string): string {
  // Remover javascript:, data:, vbscript:, etc.
  const dangerousProtocols = /^(javascript|data|vbscript|file|about):/i;
  if (dangerousProtocols.test(url)) {
    return '#';
  }
  return url;
}

