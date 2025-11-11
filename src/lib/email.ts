/**
 * Cliente de Email - InnovaTec
 * 
 * Integración con Resend para envío de emails.
 * 
 * Principios aplicados:
 * - Single Responsibility: Gestión de emails
 * - Dependency Inversion: Abstracción del proveedor
 */

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Envía un email usando Resend API
 */
export async function sendEmail(data: EmailData): Promise<EmailResponse> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.RESEND_FROM_EMAIL || 'noreply@innovatac.com';
  const toEmail = import.meta.env.RESEND_TO_EMAIL || 'francocanteropaul@gmail.com';

  if (!apiKey) {
    if (import.meta.env.DEV) {
      console.error('RESEND_API_KEY no está configurada');
      console.error('Variables de entorno disponibles:', {
        hasApiKey: !!import.meta.env.RESEND_API_KEY,
        hasFromEmail: !!import.meta.env.RESEND_FROM_EMAIL,
        hasToEmail: !!import.meta.env.RESEND_TO_EMAIL,
      });
    }
    return {
      success: false,
      error: 'Error de configuración del servidor',
    };
  }

  try {
    // Timeout de 10 segundos
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      signal: controller.signal,
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: data.email,
        subject: `Nuevo mensaje de contacto de ${data.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  line-height: 1.6;
                  color: #333;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background-color: #4a90e2;
                  color: white;
                  padding: 20px;
                  border-radius: 8px 8px 0 0;
                }
                .content {
                  background-color: #f8f9fa;
                  padding: 20px;
                  border-radius: 0 0 8px 8px;
                }
                .field {
                  margin-bottom: 15px;
                }
                .label {
                  font-weight: 600;
                  color: #555;
                  display: block;
                  margin-bottom: 5px;
                }
                .value {
                  color: #333;
                  padding: 10px;
                  background-color: white;
                  border-radius: 4px;
                  border: 1px solid #e5e7eb;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Nuevo mensaje de contacto</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">Nombre:</span>
                    <div class="value">${escapeHtml(data.name)}</div>
                  </div>
                  <div class="field">
                    <span class="label">Email:</span>
                    <div class="value">${escapeHtml(data.email)}</div>
                  </div>
                  <div class="field">
                    <span class="label">Mensaje:</span>
                    <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `
Nuevo mensaje de contacto

Nombre: ${data.name}
Email: ${data.email}

Mensaje:
${data.message}
        `.trim(),
      }),
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (import.meta.env.DEV) {
        console.error('Error en Resend API:', errorData);
        console.error('Status:', response.status);
        console.error('Status Text:', response.statusText);
      }
      // Proporcionar mensaje de error más específico
      const errorMessage =
        errorData.message || errorData.error?.message || 'Error al enviar el mensaje. Por favor, intentá nuevamente.';
      return {
        success: false,
        error: errorMessage,
      };
    }

    await response.json();

    return {
      success: true,
      message: 'Mensaje enviado correctamente',
    };
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Error al enviar email:', error);
    }
    return {
      success: false,
      error: 'Error de conexión. Por favor, intentá nuevamente más tarde.',
    };
  }
}

/**
 * Escapa HTML para prevenir XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

