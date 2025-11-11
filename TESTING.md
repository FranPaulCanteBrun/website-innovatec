# 🧪 Guía de Pruebas - InnovaTec

Esta guía te ayudará a probar todas las funcionalidades del sitio antes de continuar con el desarrollo.

## 📋 Checklist de Pruebas

### 1. Verificación Inicial

- [ ] **Verificar que no hay errores de TypeScript**:
  ```bash
  npm run check
  ```
  Debe mostrar: `0 errors, 0 warnings`

- [ ] **Verificar que el servidor inicia correctamente**:
  ```bash
  npm run dev
  ```
  Debe iniciar en `http://localhost:4321`

### 2. Pruebas de Navegación

- [ ] **Navegación entre páginas**:
  - [ ] Inicio (`/`)
  - [ ] Servicios (`/servicios`)
  - [ ] Proyectos (`/proyectos`)
  - [ ] Testimonios (`/testimonios`)
  - [ ] Sobre mí (`/sobre-mi`)
  - [ ] Contacto (`/contacto`)

- [ ] **Header y Footer**:
  - [ ] Todos los enlaces funcionan
  - [ ] Menú móvil se abre/cierra correctamente
  - [ ] Header es sticky (se mantiene al hacer scroll)

### 3. Pruebas de Internacionalización (i18n)

- [ ] **Cambio de idioma ES/EN**:
  - [ ] Click en el selector de idioma (ES/EN)
  - [ ] La página se recarga con el idioma correcto
  - [ ] Todos los textos cambian de idioma
  - [ ] El idioma se persiste al recargar la página

- [ ] **Verificar traducciones en cada página**:
  - [ ] Inicio: Títulos, botones, textos
  - [ ] Servicios: Nombres y descripciones
  - [ ] Proyectos: "Problema", "Solución", "Impacto"
  - [ ] Testimonios: Textos y nombres
  - [ ] Sobre mí: Contenido completo
  - [ ] Contacto: Labels del formulario

### 4. Pruebas de Tema (Dark/Light Mode)

- [ ] **Toggle de tema**:
  - [ ] Click en el botón de tema
  - [ ] El tema cambia correctamente (claro ↔ oscuro)
  - [ ] El icono cambia (sol ↔ luna)
  - [ ] El tema se persiste al recargar la página

- [ ] **Verificar contraste en ambos temas**:
  - [ ] Modo claro: Texto visible en todos los elementos
  - [ ] Modo oscuro: Texto visible en todos los elementos
  - [ ] No hay elementos que se "funden" con el fondo

- [ ] **Verificar en todas las páginas**:
  - [ ] Inicio
  - [ ] Servicios
  - [ ] Proyectos
  - [ ] Testimonios
  - [ ] Sobre mí
  - [ ] Contacto

### 5. Pruebas de Formulario de Contacto

- [ ] **Validación frontend**:
  - [ ] Campo nombre: Requerido, mínimo 2 caracteres
  - [ ] Campo email: Requerido, formato válido
  - [ ] Campo mensaje: Requerido, mínimo 10 caracteres
  - [ ] Mensajes de error se muestran correctamente

- [ ] **Envío del formulario**:
  - [ ] Formulario válido se envía correctamente
  - [ ] Mensaje de éxito se muestra
  - [ ] Formulario se limpia después del envío
  - [ ] Email se recibe en `RESEND_TO_EMAIL`

- [ ] **Rate limiting**:
  - [ ] Después de 3 envíos, muestra mensaje de rate limit
  - [ ] El rate limit se resetea después de 1 hora

- [ ] **Honeypot**:
  - [ ] Campo `website` está oculto
  - [ ] Si se completa, el mensaje no se envía (silent fail)

- [ ] **Traducciones del formulario**:
  - [ ] Labels en ES/EN
  - [ ] Mensajes de error en ES/EN
  - [ ] Mensajes de éxito en ES/EN

### 6. Pruebas de Accesibilidad

- [ ] **Navegación con teclado**:
  - [ ] Tab: Navega entre elementos interactivos
  - [ ] Enter: Activa botones y enlaces
  - [ ] Escape: Cierra menús y modales
  - [ ] Orden de tabulación es lógico

- [ ] **Focus visible**:
  - [ ] Todos los elementos interactivos muestran focus
  - [ ] El focus es visible en ambos temas

- [ ] **ARIA labels**:
  - [ ] Botones tienen `aria-label` cuando es necesario
  - [ ] Menús tienen `aria-expanded` y `aria-haspopup`
  - [ ] Formulario tiene `aria-label`

- [ ] **Contraste de colores**:
  - [ ] Todos los textos cumplen WCAG AA (ratio 4.5:1)
  - [ ] Verificar con herramienta de contraste

### 7. Pruebas de Responsive Design

- [ ] **Mobile (< 640px)**:
  - [ ] Menú móvil funciona
  - [ ] Todos los elementos son visibles
  - [ ] No hay overflow horizontal
  - [ ] Formulario es usable

- [ ] **Tablet (640px - 1024px)**:
  - [ ] Layout se adapta correctamente
  - [ ] Grids se reorganizan

- [ ] **Desktop (> 1024px)**:
  - [ ] Layout completo se muestra
  - [ ] Todos los elementos están bien espaciados

### 8. Pruebas de Performance

- [ ] **Lighthouse (Chrome DevTools)**:
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 90
  - [ ] Best Practices ≥ 90
  - [ ] SEO ≥ 90

- [ ] **Carga de página**:
  - [ ] Página inicial carga en < 3 segundos
  - [ ] No hay recursos bloqueantes
  - [ ] Imágenes se cargan con lazy loading

### 9. Pruebas de SEO

- [ ] **Meta tags**:
  - [ ] Cada página tiene `title` único
  - [ ] Cada página tiene `description` único
  - [ ] Open Graph tags están presentes
  - [ ] Canonical URLs están correctos

- [ ] **Schema.org**:
  - [ ] JSON-LD de Organization está presente
  - [ ] JSON-LD de Person está presente
  - [ ] Estructura es válida

- [ ] **Sitemap y Robots**:
  - [ ] `/sitemap.xml` es accesible
  - [ ] `/robots.txt` es accesible
  - [ ] Todas las páginas están en el sitemap

### 10. Pruebas de Cookies

- [ ] **Cookie Banner**:
  - [ ] Se muestra en la primera visita
  - [ ] "Aceptar todas" funciona
  - [ ] "Solo necesarias" funciona
  - [ ] No se muestra después de aceptar
  - [ ] Se traduce correctamente (ES/EN)

## 🚀 Cómo Ejecutar las Pruebas

### Paso 1: Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre el navegador en: `http://localhost:4321`

### Paso 2: Pruebas Manuales

1. **Navegación**: Recorre todas las páginas usando el menú
2. **i18n**: Cambia el idioma y verifica que todo se traduce
3. **Tema**: Cambia entre modo claro y oscuro
4. **Formulario**: Completa y envía el formulario de contacto
5. **Responsive**: Cambia el tamaño de la ventana del navegador
6. **Accesibilidad**: Navega solo con el teclado (Tab, Enter, Escape)

### Paso 3: Pruebas con Lighthouse

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Selecciona todas las categorías
4. Haz clic en "Generate report"
5. Verifica que todos los scores sean ≥ 90

### Paso 4: Pruebas de Consola

1. Abre la consola del navegador (F12)
2. Verifica que no hay errores en la consola
3. Verifica que no hay warnings críticos

## 🐛 Problemas Comunes y Soluciones

### El servidor no inicia

**Solución**: Verifica que todas las dependencias estén instaladas:
```bash
npm install
```

### El formulario no envía emails

**Solución**: Verifica que `RESEND_API_KEY` esté configurada en `.env`

### Las traducciones no funcionan

**Solución**: Verifica que los archivos JSON en `src/locales/` estén correctos

### El tema no persiste

**Solución**: Verifica que localStorage esté habilitado en el navegador

### Errores de TypeScript

**Solución**: Ejecuta `npm run check` y corrige los errores reportados

## ✅ Criterios de Aceptación

El proyecto está listo para continuar cuando:

- ✅ Todas las páginas cargan sin errores
- ✅ Navegación funciona correctamente
- ✅ i18n funciona en ES/EN
- ✅ Tema claro/oscuro funciona y persiste
- ✅ Formulario de contacto envía emails correctamente
- ✅ No hay errores en la consola del navegador
- ✅ Lighthouse scores ≥ 90 en todas las categorías
- ✅ Navegación con teclado funciona correctamente
- ✅ Responsive design funciona en mobile, tablet y desktop

## 📝 Notas

- Las pruebas deben realizarse en ambos idiomas (ES/EN)
- Las pruebas deben realizarse en ambos temas (claro/oscuro)
- Las pruebas deben realizarse en diferentes tamaños de pantalla
- Si encuentras algún problema, documenta los pasos para reproducirlo

---

**¿Listo para probar?** Inicia el servidor con `npm run dev` y comienza con el checklist de arriba.

