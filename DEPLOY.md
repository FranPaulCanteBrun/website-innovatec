# 🚀 Guía de Despliegue - InnovaTec en Vercel

Esta guía te ayudará a desplegar tu sitio web InnovaTec en Vercel paso a paso.

## 📋 Requisitos Previos

- ✅ Proyecto configurado con Astro
- ✅ Cuenta en [Vercel](https://vercel.com) (gratuita)
- ✅ Cuenta en [Resend](https://resend.com) (gratuita)
- ✅ Repositorio en GitHub (recomendado) o GitLab/Bitbucket
- ⏳ Dominio registrado (puedes hacerlo después del despliegue inicial)

---

## 🔧 Paso 1: Preparar el Proyecto (Ya Completado)

El proyecto ya está configurado con:
- ✅ Adapter de Vercel (`@astrojs/vercel`)
- ✅ Configuración de `astro.config.mjs` para serverless
- ✅ Headers de seguridad en `vercel.json`

**No necesitas hacer nada en este paso**, pero si quieres verificar:

```bash
# Verificar que el adapter está instalado
npm list @astrojs/vercel

# Verificar la configuración
cat astro.config.mjs
```

---

## 🌐 Paso 2: Crear Cuenta en Vercel

1. **Ve a [vercel.com](https://vercel.com)**
2. **Haz clic en "Sign Up"**
3. **Elige una opción de registro:**
   - **Recomendado**: "Continue with GitHub" (más fácil para conectar repositorios)
   - Alternativa: Email + contraseña

4. **Completa el registro** siguiendo las instrucciones

---

## 📦 Paso 3: Conectar Repositorio a Vercel

### Opción A: Si tu código está en GitHub (Recomendado)

1. **En el Dashboard de Vercel**, haz clic en **"Add New..."** → **"Project"**

2. **Importa tu repositorio:**
   - Si es la primera vez, autoriza a Vercel a acceder a GitHub
   - Busca tu repositorio `web_innovatec` (o el nombre que tenga)
   - Haz clic en **"Import"**

3. **Configuración del proyecto:**
   - **Framework Preset**: Astro (debería detectarse automáticamente)
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: `npm run build` (auto-detectado)
   - **Output Directory**: `.vercel/output` (auto-detectado)
   - **Install Command**: `npm install` (auto-detectado)

4. **Variables de Entorno** (⚠️ IMPORTANTE):
   Haz clic en **"Environment Variables"** y agrega:

   ```
   RESEND_API_KEY = tu_api_key_de_resend
   RESEND_FROM_EMAIL = onboarding@resend.dev
   RESEND_TO_EMAIL = tu_email@gmail.com
   PUBLIC_SITE_URL = https://tu-proyecto.vercel.app
   ```

   **Nota**: 
   - `PUBLIC_SITE_URL` lo actualizarás después cuando conectes tu dominio
   - `RESEND_FROM_EMAIL` lo cambiarás a `noreply@tudominio.com.ar` después de verificar el dominio en Resend

5. **Haz clic en "Deploy"**

### Opción B: Si tu código NO está en GitHub

1. **Sube tu código a GitHub primero:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/web_innovatec.git
   git push -u origin main
   ```

2. **Luego sigue los pasos de la Opción A**

---

## 🚀 Paso 4: Primer Deploy

1. **Vercel comenzará a construir tu proyecto automáticamente**

2. **Espera a que termine el build** (2-5 minutos normalmente)

3. **Verifica el resultado:**
   - Si todo está bien, verás "Ready" en verde
   - Obtendrás una URL temporal: `https://tu-proyecto.vercel.app`

4. **Prueba tu sitio:**
   - Visita la URL proporcionada
   - Navega por las páginas
   - **⚠️ IMPORTANTE**: El formulario de contacto NO funcionará aún porque:
     - Las variables de entorno pueden no estar configuradas correctamente
     - O `RESEND_FROM_EMAIL` aún es `onboarding@resend.dev` (esto está bien para pruebas)

---

## 🔍 Paso 5: Verificar Variables de Entorno

1. **En Vercel Dashboard**, ve a tu proyecto
2. **Settings** → **Environment Variables**
3. **Verifica que todas las variables estén configuradas:**
   - ✅ `RESEND_API_KEY`
   - ✅ `RESEND_FROM_EMAIL`
   - ✅ `RESEND_TO_EMAIL`
   - ✅ `PUBLIC_SITE_URL`

4. **Si falta alguna o necesitas cambiarla:**
   - Haz clic en "Add" o edita la existente
   - **Aplica a**: Production, Preview, Development (marca todas)
   - Guarda

5. **Redeploy después de cambiar variables:**
   - Ve a **"Deployments"**
   - Haz clic en los tres puntos (⋯) del último deploy
   - Selecciona **"Redeploy"**

---

## 📧 Paso 6: Probar Formulario de Contacto

1. **Visita tu sitio en Vercel**: `https://tu-proyecto.vercel.app/contacto`

2. **Completa el formulario de contacto**

3. **Envía un mensaje de prueba**

4. **Verifica:**
   - ✅ El formulario muestra mensaje de éxito
   - ✅ Recibes el email en `RESEND_TO_EMAIL`
   - ✅ El email viene de `onboarding@resend.dev` (temporal)

5. **Si hay errores:**
   - Ve a **Deployments** → selecciona el último deploy → **"Functions"** → revisa los logs
   - O ve a **Resend Dashboard** → **Logs** para ver errores de email

---

## 🌍 Paso 7: Conectar Dominio Personalizado (Opcional - Después)

**Nota**: Puedes hacer esto después de registrar tu dominio. Por ahora, tu sitio ya está funcionando en `tu-proyecto.vercel.app`

### Cuando tengas tu dominio registrado:

1. **En Vercel Dashboard**, ve a tu proyecto
2. **Settings** → **Domains**
3. **Agrega tu dominio** (ej: `innovatac.com.ar` o `www.innovatac.com.ar`)
4. **Vercel te mostrará registros DNS** que debes agregar:
   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21
   
   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

5. **Configura DNS en tu proveedor de dominio:**
   - Si es NIC Argentina: Ve a [nic.ar](https://nic.ar/) → Tu dominio → DNS
   - Si es DonWeb/WNPower: Panel de control → DNS
   - Agrega los registros que Vercel indicó

6. **Espera propagación DNS** (1-48 horas, típico: 1-4 horas)
   - Verifica con: [whatsmydns.net](https://www.whatsmydns.net/)

7. **Vercel emitirá SSL automáticamente** cuando detecte los DNS correctos

8. **Actualiza `PUBLIC_SITE_URL` en Vercel:**
   - Settings → Environment Variables
   - Cambia `PUBLIC_SITE_URL` a `https://tu-dominio.com.ar`
   - Redeploy

---

## ✉️ Paso 8: Verificar Dominio en Resend (Después de conectar dominio)

1. **Accede a [Resend Dashboard](https://resend.com/domains)**
2. **"Add Domain"**
3. **Ingresa tu dominio** (ej: `innovatac.com.ar`)
4. **Resend te mostrará registros DNS** a agregar:
   ```
   Tipo: TXT
   Nombre: @
   Valor: resend-domain-verification=xxxxx
   
   Tipo: TXT
   Nombre: @
   Valor: v=spf1 include:resend.com ~all
   
   Tipo: CNAME
   Nombre: resend._domainkey
   Valor: xxxxx.dkim.resend.com
   ```

5. **Agrega estos registros DNS** en tu proveedor de dominio (junto con los de Vercel)

6. **Espera verificación** (puede tardar hasta 48 horas)

7. **Cuando esté verificado:**
   - Actualiza `RESEND_FROM_EMAIL` en Vercel a `noreply@tu-dominio.com.ar`
   - Redeploy

---

## ✅ Checklist de Despliegue

### Despliegue Inicial
- [ ] Cuenta de Vercel creada
- [ ] Repositorio conectado a Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Primer deploy exitoso
- [ ] Sitio accesible en `tu-proyecto.vercel.app`
- [ ] Formulario de contacto funcionando (con `onboarding@resend.dev`)

### Después de Registrar Dominio
- [ ] Dominio registrado y activo
- [ ] DNS configurado para apuntar a Vercel
- [ ] Dominio conectado en Vercel
- [ ] SSL activo (automático en Vercel)
- [ ] `PUBLIC_SITE_URL` actualizado en Vercel
- [ ] Dominio verificado en Resend
- [ ] `RESEND_FROM_EMAIL` actualizado a dominio verificado
- [ ] Formulario funcionando con email personalizado

---

## 🆘 Solución de Problemas

### Error: "Build Failed"

**Causas comunes:**
- Variables de entorno faltantes
- Error de sintaxis en el código
- Dependencias no instaladas

**Solución:**
1. Revisa los logs del build en Vercel
2. Verifica que todas las dependencias estén en `package.json`
3. Prueba hacer build local: `npm run build`

### Error: "Function Error" al enviar formulario

**Causas comunes:**
- `RESEND_API_KEY` no configurada o inválida
- Variables de entorno no aplicadas correctamente

**Solución:**
1. Verifica variables de entorno en Vercel (Settings → Environment Variables)
2. Asegúrate de que estén aplicadas a "Production"
3. Redeploy después de cambiar variables
4. Revisa logs en Deployments → Functions

### El sitio funciona pero el formulario no envía emails

**Causas comunes:**
- `RESEND_API_KEY` incorrecta
- `RESEND_FROM_EMAIL` no verificado (si usas dominio personalizado)
- Límite de Resend alcanzado (100 emails/día en plan gratuito)

**Solución:**
1. Verifica que `RESEND_API_KEY` sea válida en Resend Dashboard
2. Si usas dominio personalizado, verifica que esté verificado en Resend
3. Revisa logs en Resend Dashboard → Logs
4. Para desarrollo, usa `onboarding@resend.dev` que no requiere verificación

### El dominio no se conecta a Vercel

**Causas comunes:**
- DNS no configurados correctamente
- Propagación DNS aún en progreso (puede tardar hasta 48 horas)

**Solución:**
1. Verifica que los registros DNS sean exactamente como Vercel los indica
2. Usa [whatsmydns.net](https://www.whatsmydns.net/) para verificar propagación
3. Espera hasta 48 horas antes de reportar problema
4. Verifica que no haya errores de sintaxis en los registros DNS

### Error 500 en producción

**Solución:**
1. Revisa logs en Vercel: Deployments → selecciona deploy → Functions → logs
2. Verifica que todas las variables de entorno estén configuradas
3. Asegúrate de que `RESEND_API_KEY` sea válida
4. Revisa logs en Resend Dashboard

---

## 📚 Recursos Útiles

- **Documentación de Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Documentación de Astro + Vercel**: [docs.astro.build/en/guides/deploy/vercel/](https://docs.astro.build/en/guides/deploy/vercel/)
- **Documentación de Resend**: [resend.com/docs](https://resend.com/docs)
- **Verificar DNS**: [whatsmydns.net](https://www.whatsmydns.net/)

---

## 💰 Costos

### Plan Gratuito de Vercel
- ✅ Hosting ilimitado para sitios estáticos
- ✅ 100 GB de ancho de banda/mes
- ✅ SSL gratuito
- ✅ Deploy automático desde Git
- ✅ Dominios personalizados ilimitados

### Plan Gratuito de Resend
- ✅ 100 emails/día
- ✅ 3,000 emails/mes
- ✅ Perfecto para desarrollo y sitios pequeños

**Total estimado**: $0 USD/mes (con planes gratuitos)

---

## 🎉 ¡Listo!

Una vez completados estos pasos, tu sitio estará:
- ✅ Desplegado en Vercel
- ✅ Accesible públicamente
- ✅ Con SSL automático
- ✅ Con formulario de contacto funcionando
- ✅ Listo para conectar dominio personalizado cuando lo tengas

**Próximos pasos** (cuando tengas tu dominio):
1. Registrar dominio en Argentina
2. Conectar dominio a Vercel
3. Verificar dominio en Resend
4. Actualizar variables de entorno

---

**¿Necesitas ayuda?** Revisa la sección de "Solución de Problemas" o consulta la documentación oficial.

