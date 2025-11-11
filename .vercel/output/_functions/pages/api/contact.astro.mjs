import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre no puede exceder 100 caracteres").trim(),
  email: z.string().email("Email inválido").min(5, "El email debe tener al menos 5 caracteres").max(255, "El email no puede exceder 255 caracteres").toLowerCase().trim(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2e3, "El mensaje no puede exceder 2000 caracteres").trim(),
  // Honeypot field (debe estar vacío)
  website: z.string().max(0, "Este campo debe estar vacío").optional()
});
function validateContactForm(data) {
  try {
    const validated = contactFormSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error };
    }
    throw error;
  }
}
function sanitizeString(input) {
  return input.replace(/[<>]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").trim();
}
function sanitizeContactForm(data) {
  return {
    name: sanitizeString(data.name),
    email: sanitizeString(data.email),
    message: sanitizeString(data.message),
    website: data.website || ""
  };
}

async function sendEmail(data) {
  const apiKey = "re_GmX8AzeK_DLyz7D2y9h58UwDhNbA3fgBj";
  const fromEmail = "onboarding@resend.dev";
  const toEmail = "francocanteropaul@gmail.com";
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
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
                    <div class="value">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
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
        `.trim()
      })
    });
    clearTimeout(timeoutId);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (false) ;
      const errorMessage = errorData.message || errorData.error?.message || "Error al enviar el mensaje. Por favor, intentá nuevamente.";
      return {
        success: false,
        error: errorMessage
      };
    }
    await response.json();
    return {
      success: true,
      message: "Mensaje enviado correctamente"
    };
  } catch (error) {
    return {
      success: false,
      error: "Error de conexión. Por favor, intentá nuevamente más tarde."
    };
  }
}
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({ success: false, error: "Content-Type debe ser application/json" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10 * 1024) {
      return new Response(
        JSON.stringify({ success: false, error: "Payload demasiado grande" }),
        {
          status: 413,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const data = await request.json();
    const validation = validateContactForm(data);
    if (!validation.success || !validation.data) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Datos inválidos",
          errors: validation.errors?.errors
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (data.website && data.website.trim() !== "") {
      return new Response(
        JSON.stringify({ success: true, message: "Mensaje enviado" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const sanitizedData = sanitizeContactForm(validation.data);
    const emailResponse = await sendEmail({
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message
    });
    if (!emailResponse.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: emailResponse.error || "Error al enviar el mensaje"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor",
        ...{}
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
