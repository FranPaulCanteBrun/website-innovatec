# InnovaTec - Sitio Web Profesional

Sitio web profesional multipágina para InnovaTec, desarrollado con Astro, TypeScript y TailwindCSS.

## 🚀 Características

- **Multipágina**: Navegación clásica con header fijo y footer consistente
- **i18n ES/EN**: Internacionalización completa con detección automática de idioma
- **Tema oscuro/claro**: Toggle manual con persistencia y detección de preferencia del sistema
- **Formulario de contacto**: Integración con Resend API, validación Zod, honeypot anti-spam
- **SEO optimizado**: Meta tags, Open Graph, Schema.org JSON-LD, sitemap.xml
- **Accesibilidad WCAG 2.2 AA**: Navegación con teclado, skip links, contraste AA, respeto a `prefers-reduced-motion`
- **Rendimiento optimizado**: Lazy loading de imágenes, preconnect, optimización de fuentes
- **Seguridad**: CSP headers, sanitización de inputs, rate limiting

## 📋 Requisitos Previos

- Node.js 18+ y npm/pnpm/yarn
- Cuenta en [Resend](https://resend.com/) para el formulario de contacto (opcional)

## 🛠️ Instalación

1. **Clonar el repositorio** (o usar el proyecto actual)

2. **Instalar dependencias**:
```bash
npm install
```

3. **Configurar variables de entorno**:
Copia el archivo `.env.example` a `.env` y completa las variables:
```bash
cp .env.example .env
```

Luego edita `.env` con tus valores:
```env
RESEND_API_KEY=tu_api_key_de_resend
RESEND_FROM_EMAIL=noreply@innovatac.com
RESEND_TO_EMAIL=francocanteropaul@gmail.com
PUBLIC_SITE_URL=http://localhost:4321
```

**Nota:** Para desarrollo local, `PUBLIC_SITE_URL` puede ser `http://localhost:4321`. Para producción, usa tu dominio real.

### Obtener API Key de Resend

**📖 Guía completa**: Ver [SETUP.md](./SETUP.md) para instrucciones detalladas.

**Resumen rápido**:
1. Regístrate en [Resend](https://resend.com/)
2. Accede al [Dashboard de API Keys](https://resend.com/api-keys)
3. Crea una nueva API Key
4. Copia la API Key y guárdala en `.env`

**⚠️ IMPORTANTE**: 
- **Para desarrollo**: Usa `onboarding@resend.dev` como `RESEND_FROM_EMAIL` (no requiere verificación)
- **Para producción**: Necesitas verificar tu propio dominio en Resend y usar un email de ese dominio (ej: `noreply@tudominio.com`)
- **No puedes usar emails de Gmail, Yahoo, Outlook, etc.** sin verificar el dominio completo

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:4321
npm run start        # Alias de npm run dev

# Producción
npm run build        # Construye el sitio para producción
npm run preview      # Previsualiza el build de producción (requiere build previo)

# Verificación
npm run check        # Verifica tipos TypeScript
npm run check:watch  # Verifica tipos en modo watch
```

## 🏃 Inicio Rápido

1. **Instalar dependencias**:
```bash
npm install
```

2. **Configurar variables de entorno**:
```bash
cp .env.example .env
# Edita .env con tus valores (opcional para desarrollo)
```

3. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```

4. **Abrir en el navegador**:
```
http://localhost:4321
```

**Nota:** El formulario de contacto funcionará solo si configuraste `RESEND_API_KEY` en `.env`. Si no lo configuras, verás un error en la consola pero el sitio funcionará normalmente.

## 📁 Estructura del Proyecto

```
web_innovatec/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes UI base (Header, Footer, Button, etc.)
│   │   ├── sections/        # Componentes de sección (Hero, ServiceCard, etc.)
│   │   └── forms/           # Formularios (ContactForm)
│   ├── layouts/             # Layouts (BaseLayout)
│   ├── lib/                 # Utilidades (i18n, theme, validators, email, etc.)
│   ├── locales/             # Traducciones ES/EN
│   │   ├── es/
│   │   └── en/
│   ├── pages/               # Páginas del sitio
│   │   ├── index.astro      # Inicio
│   │   ├── servicios.astro # Servicios
│   │   ├── proyectos.astro  # Proyectos
│   │   ├── testimonios.astro # Testimonios
│   │   ├── sobre-mi.astro   # Sobre mí
│   │   ├── contacto.astro   # Contacto
│   │   └── api/             # API endpoints
│   └── styles/              # Estilos globales y tokens
├── public/                   # Archivos estáticos
│   ├── favicons/            # Favicons
│   ├── images/              # Imágenes
│   └── robots.txt           # Robots.txt
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.mjs      # Configuración de TailwindCSS
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

## 🎨 Personalización

### Cambiar Paleta de Colores

Edita `src/styles/tokens.css`:

```css
:root {
  /* Color de acento (azul suave) */
  --color-accent: #4a90e2;
  --color-accent-hover: #357abd;
  --color-accent-light: #e3f2fd;
  
  /* Colores de tema claro */
  --color-light-bg-primary: #ffffff;
  --color-light-text-primary: #1a1a1a;
  
  /* Colores de tema oscuro */
  --color-dark-bg-primary: #0f172a;
  --color-dark-text-primary: #f1f5f9;
}
```

### Cambiar Tipografías

Edita `src/styles/tokens.css`:

```css
:root {
  --font-family-primary: 'Inter', system-ui, sans-serif;
}
```

Y actualiza el link de Google Fonts en `src/layouts/BaseLayout.astro`.

### Añadir Nuevos Proyectos

Edita `src/pages/proyectos.astro` y añade objetos al array `projects`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    problem: 'Problema que resuelve',
    solution: 'Solución implementada',
    impact: 'Impacto logrado',
    technologies: ['React', 'TypeScript'],
  },
  // ... más proyectos
];
```

### Añadir Nuevos Testimonios

Edita `src/pages/testimonios.astro` y añade objetos al array `testimonials`:

```typescript
const testimonials = [
  {
    id: 1,
    name: 'Nombre del Cliente',
    role: 'Rol/Empresa',
    text: 'Texto del testimonio',
    photo: '/images/testimonials/foto.jpg', // Opcional
  },
  // ... más testimonios
];
```

## 📧 Configurar Formulario de Contacto

### Opción 1: Resend (Recomendado)

1. Obtén tu API Key de Resend (ver sección "Obtener API Key de Resend")
2. Configura las variables de entorno en `.env`
3. El formulario funcionará automáticamente

### Opción 2: EmailJS

Si prefieres usar EmailJS:

1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Obtén tu Public Key y Service ID
4. Modifica `src/lib/email.ts` para usar EmailJS en lugar de Resend

## 📊 Analytics (Opcional)

Para añadir Google Analytics 4 o Umami:

1. Crea un componente `src/components/analytics/Analytics.astro`
2. Añade el script de tracking
3. Importa el componente en `src/layouts/BaseLayout.astro`
4. Configura las variables de entorno necesarias

Ejemplo con GA4:

```astro
---
const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_ID;
---

{GA_MEASUREMENT_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    ></script>
    <script set:html={`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `} />
  </>
)}
```

## 🔒 Seguridad

### Content Security Policy (CSP)

El CSP está configurado en:
- `vercel.json` (para Vercel)
- `public/_headers` (para Netlify)

Ajusta el CSP según tus necesidades. Si añades analytics o widgets externos, actualiza las directivas `script-src` y `connect-src`.

### Rate Limiting

El formulario de contacto tiene rate limiting básico (3 envíos por hora) usando localStorage. Para producción, considera implementar rate limiting en el servidor.

## 🚢 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. Vercel detectará automáticamente Astro y desplegará

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno
3. Netlify usará el archivo `public/_headers` para los security headers

### Otros Proveedores

El sitio es estático, así que puedes desplegarlo en cualquier proveedor que soporte sitios estáticos (GitHub Pages, Cloudflare Pages, etc.).

## ✅ Checklist de Verificación

Antes de publicar, verifica:

### Accesibilidad
- [ ] Navegación completa con teclado (Tab, Shift+Tab, Enter, Escape)
- [ ] Contraste AA verificado (usa herramientas como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- [ ] Labels vinculados a inputs
- [ ] Alt text en todas las imágenes
- [ ] Headings jerárquicos (h1 → h2 → h3)
- [ ] Landmarks semánticos (`<header>`, `<main>`, `<footer>`, `<nav>`)
- [ ] Lighthouse Accessibility ≥ 90

### SEO
- [ ] Meta tags únicos por página
- [ ] Open Graph configurado
- [ ] Twitter Cards configurado
- [ ] Schema.org JSON-LD presente
- [ ] Sitemap.xml generado y accesible
- [ ] Robots.txt configurado
- [ ] Canonical URLs correctos
- [ ] Lighthouse SEO ≥ 90

### Rendimiento
- [ ] Imágenes optimizadas (WebP, lazy loading)
- [ ] CSS crítico inline
- [ ] Fuentes con `font-display: swap`
- [ ] Lighthouse Performance ≥ 90

### Seguridad
- [ ] CSP configurado
- [ ] Security headers configurados
- [ ] Sanitización de inputs
- [ ] Honeypot en formulario
- [ ] Rate limiting básico
- [ ] Lighthouse Best Practices ≥ 90

## 🐛 Solución de Problemas

### El formulario de contacto no envía emails

1. Verifica que `RESEND_API_KEY` esté configurada correctamente
2. Verifica que `RESEND_FROM_EMAIL` sea un dominio verificado en Resend
3. Revisa la consola del navegador para errores
4. Revisa los logs del servidor (si usas API endpoint)

### El tema no persiste

1. Verifica que localStorage esté habilitado en el navegador
2. Revisa la consola del navegador para errores
3. Verifica que `src/lib/theme.ts` esté importado correctamente

### Las traducciones no funcionan

1. Verifica que los archivos JSON en `src/locales/` estén correctos
2. Revisa que `src/lib/i18n.ts` esté importado correctamente
3. Verifica que el locale esté siendo detectado correctamente

## 📝 Licencia

Este proyecto es privado y propiedad de InnovaTec.

## 👤 Autor

**Franco Paul Cantero Brunelli**
- LinkedIn: [franco-paul-cantero-brunelli](https://www.linkedin.com/in/franco-paul-cantero-brunelli/)
- GitHub: [FranPaulCanteBrun](https://github.com/FranPaulCanteBrun)
- Email: francocanteropaul@gmail.com

---

Hecho con ❤️ usando [Astro](https://astro.build/), [TypeScript](https://www.typescriptlang.org/) y [TailwindCSS](https://tailwindcss.com/)

