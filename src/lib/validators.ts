/**
 * Validadores - InnovaTec
 * 
 * Validación de formularios usando Zod.
 * 
 * Principios aplicados:
 * - Single Responsibility: Validación centralizada
 * - Open/Closed: Extensible para nuevos esquemas
 */

import { z } from 'zod';

/**
 * Esquema de validación para el formulario de contacto
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .trim(),
  email: z
    .string()
    .email('Email inválido')
    .min(5, 'El email debe tener al menos 5 caracteres')
    .max(255, 'El email no puede exceder 255 caracteres')
    .toLowerCase()
    .trim(),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres')
    .trim(),
  // Honeypot field (debe estar vacío)
  website: z.string().max(0, 'Este campo debe estar vacío').optional(),
});

/**
 * Tipo inferido del esquema de contacto
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Valida los datos del formulario de contacto
 */
export function validateContactForm(data: unknown): {
  success: boolean;
  data?: ContactFormData;
  errors?: z.ZodError;
} {
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

/**
 * Sanitiza un string removiendo caracteres peligrosos
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remover < y >
    .replace(/javascript:/gi, '') // Remover javascript:
    .replace(/on\w+=/gi, '') // Remover event handlers
    .trim();
}

/**
 * Sanitiza los datos del formulario
 */
export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeString(data.name),
    email: sanitizeString(data.email),
    message: sanitizeString(data.message),
    website: data.website || '',
  };
}

