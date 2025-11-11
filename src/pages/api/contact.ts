/**
 * API Endpoint para Formulario de Contacto - InnovaTec
 * 
 * Endpoint para procesar el formulario de contacto.
 * 
 * Principios aplicados:
 * - Single Responsibility: Procesamiento de formulario
 * - Separation of Concerns: Validación separada del envío
 */

import type { APIRoute } from 'astro';
import { validateContactForm, sanitizeContactForm } from '@/lib/validators';
import { sendEmail } from '@/lib/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar Content-Type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ success: false, error: 'Content-Type debe ser application/json' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Verificar tamaño del body (máximo 10KB)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10 * 1024) {
      return new Response(
        JSON.stringify({ success: false, error: 'Payload demasiado grande' }),
        {
          status: 413,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Obtener datos del body
    const data = await request.json();

    // Validar datos
    const validation = validateContactForm(data);

    if (!validation.success || !validation.data) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Datos inválidos',
          errors: validation.errors?.errors,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Verificar honeypot
    if (data.website && data.website.trim() !== '') {
      // Honeypot detectado - no responder (silent fail)
      return new Response(
        JSON.stringify({ success: true, message: 'Mensaje enviado' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Sanitizar datos
    const sanitizedData = sanitizeContactForm(validation.data);

    // Enviar email
    const emailResponse = await sendEmail({
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message,
    });

    if (!emailResponse.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: emailResponse.error || 'Error al enviar el mensaje',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Mensaje enviado correctamente',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Error en API de contacto:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
    }
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Error interno del servidor',
        ...(import.meta.env.DEV && error instanceof Error
          ? { details: error.message }
          : {}),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

