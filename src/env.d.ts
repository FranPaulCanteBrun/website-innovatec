/// <reference types="astro/client" />

// Definición de tipos para variables de entorno
interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly RESEND_FROM_EMAIL: string;
  readonly RESEND_TO_EMAIL: string;
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

