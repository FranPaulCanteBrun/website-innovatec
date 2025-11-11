# Checklist de Verificación - InnovaTec

Checklist completo para verificar accesibilidad, SEO, rendimiento y seguridad antes de publicar.

## 🔍 Accesibilidad (WCAG 2.2 AA)

### Navegación con Teclado
- [ ] Navegación completa con Tab y Shift+Tab
- [ ] Orden lógico de foco
- [ ] Foco visible en todos los elementos interactivos
- [ ] Escape cierra modales/menús
- [ ] Enter activa botones y enlaces
- [ ] Skip link funciona correctamente

### Contraste y Legibilidad
- [ ] Contraste AA verificado (4.5:1 para texto normal, 3:1 para texto grande)
- [ ] Contraste verificado en modo claro
- [ ] Contraste verificado en modo oscuro
- [ ] Texto no depende solo del color para transmitir información

### Formularios
- [ ] Todos los inputs tienen labels vinculados
- [ ] Mensajes de error accesibles (aria-describedby)
- [ ] Campos requeridos marcados claramente
- [ ] Validación accesible (aria-invalid, aria-live)

### Imágenes
- [ ] Todas las imágenes tienen alt text significativo
- [ ] Imágenes decorativas tienen alt=""
- [ ] Imágenes complejas tienen descripciones largas

### Estructura Semántica
- [ ] Headings jerárquicos (h1 → h2 → h3, sin saltos)
- [ ] Landmarks semánticos (`<header>`, `<main>`, `<footer>`, `<nav>`)
- [ ] Listas marcadas con `<ul>` o `<ol>`
- [ ] Botones vs enlaces usados correctamente

### ARIA
- [ ] ARIA labels solo cuando es necesario
- [ ] ARIA roles correctos
- [ ] Estados ARIA actualizados dinámicamente (aria-expanded, aria-selected)

### Preferencias del Usuario
- [ ] `prefers-reduced-motion` respetado
- [ ] `prefers-color-scheme` respetado
- [ ] Tamaño de fuente escalable

### Herramientas de Verificación
- [ ] Lighthouse Accessibility ≥ 90
- [ ] axe DevTools sin errores críticos
- [ ] WAVE sin errores
- [ ] Navegación con teclado probada manualmente
- [ ] Lectores de pantalla probados (NVDA/JAWS/VoiceOver)

## 🔎 SEO

### Meta Tags
- [ ] Title único por página (50-60 caracteres)
- [ ] Description única por página (150-160 caracteres)
- [ ] Keywords relevantes (opcional, no crítico)
- [ ] Canonical URL configurado
- [ ] Robots meta tag configurado (noindex si es necesario)

### Open Graph
- [ ] og:title configurado
- [ ] og:description configurado
- [ ] og:image configurado (1200x630px recomendado)
- [ ] og:url configurado
- [ ] og:type configurado
- [ ] og:locale configurado

### Twitter Cards
- [ ] twitter:card configurado
- [ ] twitter:title configurado
- [ ] twitter:description configurado
- [ ] twitter:image configurado

### Schema.org JSON-LD
- [ ] Organization schema presente
- [ ] Person schema presente
- [ ] BreadcrumbList schema (si aplica)
- [ ] Validación en [Google Rich Results Test](https://search.google.com/test/rich-results)

### Sitemap y Robots
- [ ] sitemap.xml generado y accesible
- [ ] sitemap.xml incluye todas las páginas
- [ ] robots.txt configurado correctamente
- [ ] robots.txt referencia sitemap.xml

### Contenido
- [ ] Headings jerárquicos (h1 único por página)
- [ ] Contenido único y relevante
- [ ] URLs amigables y descriptivas
- [ ] Enlaces internos relevantes
- [ ] Alt text en imágenes (también para SEO)

### Herramientas de Verificación
- [ ] Lighthouse SEO ≥ 90
- [ ] Google Search Console configurado
- [ ] Sitemap enviado a Google Search Console
- [ ] Rich Results Test sin errores
- [ ] Meta tags verificados con [Open Graph Debugger](https://www.opengraph.xyz/)

## ⚡ Rendimiento

### Imágenes
- [ ] Imágenes optimizadas (WebP cuando sea posible)
- [ ] Lazy loading implementado
- [ ] Tamaños de imagen apropiados
- [ ] srcset para imágenes responsivas

### CSS
- [ ] CSS crítico inline
- [ ] CSS no crítico cargado diferidamente
- [ ] TailwindCSS purgado correctamente
- [ ] Sin CSS no utilizado

### JavaScript
- [ ] JavaScript mínimo necesario
- [ ] Code splitting implementado
- [ ] Scripts defer/async cuando sea posible

### Fuentes
- [ ] Fuentes con `font-display: swap`
- [ ] Preconnect a Google Fonts
- [ ] Subset de fuentes si es posible

### Caché
- [ ] Headers de caché configurados
- [ ] Assets con versionado/hashing

### Herramientas de Verificación
- [ ] Lighthouse Performance ≥ 90
- [ ] Core Web Vitals verificado:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] PageSpeed Insights sin problemas críticos
- [ ] WebPageTest verificado

## 🔒 Seguridad

### Headers de Seguridad
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] X-XSS-Protection: 1; mode=block
- [ ] Referrer-Policy configurado
- [ ] Permissions-Policy configurado
- [ ] Content-Security-Policy configurado

### Content Security Policy (CSP)
- [ ] default-src configurado
- [ ] script-src configurado (sin 'unsafe-inline' si es posible)
- [ ] style-src configurado
- [ ] img-src configurado
- [ ] connect-src configurado
- [ ] CSP probado y sin errores en consola

### Formularios
- [ ] Sanitización de inputs
- [ ] Validación en frontend y backend
- [ ] Honeypot implementado
- [ ] Rate limiting implementado
- [ ] CSRF protection (si aplica)

### Datos Sensibles
- [ ] Variables de entorno configuradas
- [ ] API keys no expuestas en código
- [ ] .env en .gitignore
- [ ] No logging de datos sensibles

### Herramientas de Verificación
- [ ] Lighthouse Best Practices ≥ 90
- [ ] Security Headers verificado en [SecurityHeaders.com](https://securityheaders.com/)
- [ ] CSP verificado sin errores
- [ ] Formulario probado contra spam

## 🌐 Funcionalidad

### Navegación
- [ ] Todos los enlaces funcionan
- [ ] Menú móvil funciona
- [ ] Navegación entre páginas correcta
- [ ] Breadcrumbs (si aplica)

### Formulario de Contacto
- [ ] Validación funciona
- [ ] Envío de emails funciona
- [ ] Mensajes de éxito/error mostrados
- [ ] Rate limiting funciona
- [ ] Honeypot funciona

### i18n
- [ ] Cambio de idioma funciona
- [ ] Idioma persiste en localStorage
- [ ] Todas las traducciones presentes
- [ ] Fallback a ES funciona

### Tema
- [ ] Toggle de tema funciona
- [ ] Tema persiste en localStorage
- [ ] Preferencia del sistema respetada
- [ ] Transición suave entre temas

### Responsive
- [ ] Mobile (320px+)
- [ ] Tablet (768px+)
- [ ] Desktop (1024px+)
- [ ] Large Desktop (1280px+)

## 📱 Testing Cross-Browser

- [ ] Chrome/Edge (últimas 2 versiones)
- [ ] Firefox (últimas 2 versiones)
- [ ] Safari (últimas 2 versiones)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## ✅ Resultados Finales

### Lighthouse Scores
- [ ] Performance: ___ / 100 (objetivo: ≥ 90)
- [ ] Accessibility: ___ / 100 (objetivo: ≥ 90)
- [ ] Best Practices: ___ / 100 (objetivo: ≥ 90)
- [ ] SEO: ___ / 100 (objetivo: ≥ 90)

### Fecha de Verificación
- Fecha: ___________
- Verificado por: ___________

### Notas
- ___________
- ___________
- ___________

