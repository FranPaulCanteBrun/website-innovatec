# 🚀 Guía de Configuración - InnovaTec

Esta guía te ayudará a configurar todas las variables de entorno necesarias para iniciar el desarrollo.

## 📋 Variables de Entorno Necesarias

### 1. Resend API (Para Formulario de Contacto)

El formulario de contacto usa **Resend** para enviar emails. Esta es la única API externa que necesitas configurar.

#### ¿Cómo obtener tu API Key de Resend?

1. **Regístrate en Resend**:
   - Ve a [https://resend.com/](https://resend.com/)
   - Haz clic en "Sign Up" o "Get Started"
   - Crea una cuenta (puedes usar tu email de GitHub, Google, etc.)

2. **Verifica tu dominio** (Opcional para desarrollo):
   - En el dashboard, ve a "Domains"
   - Agrega y verifica tu dominio
   - **Nota**: Para desarrollo, puedes usar el dominio de prueba de Resend (`onboarding@resend.dev`)

3. **Crea una API Key**:
   - Ve a [https://resend.com/api-keys](https://resend.com/api-keys)
   - Haz clic en "Create API Key"
   - Dale un nombre (ej: "InnovaTec Development")
   - Copia la API Key (solo se muestra una vez)
   - **⚠️ Importante**: Guarda la API Key en un lugar seguro

4. **Configura las variables en `.env`**:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   RESEND_FROM_EMAIL=noreply@innovatac.com
   RESEND_TO_EMAIL=francocanteropaul@gmail.com
   ```

#### Variables de Resend:

| Variable | Descripción | Ejemplo | Requerido |
|----------|-------------|---------|-----------|
| `RESEND_API_KEY` | Tu API Key de Resend | `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx` | ✅ Sí |
| `RESEND_FROM_EMAIL` | Email de origen (debe ser dominio verificado en Resend) | `noreply@innovatac.com` | ✅ Sí |
| `RESEND_TO_EMAIL` | Email donde recibirás los mensajes del formulario | `francocanteropaul@gmail.com` | ✅ Sí |

**⚠️ IMPORTANTE**: No puedes usar emails de servicios como Gmail, Yahoo, Outlook, etc. sin verificar el dominio. Para desarrollo, usa el email de prueba de Resend:
- `RESEND_FROM_EMAIL=onboarding@resend.dev`

**Para producción**: Necesitas verificar tu propio dominio en Resend y usar un email de ese dominio (ej: `noreply@tudominio.com`).

### 2. URL del Sitio (Para SEO y Open Graph)

| Variable | Descripción | Ejemplo | Requerido |
|----------|-------------|---------|-----------|
| `PUBLIC_SITE_URL` | URL base del sitio | `http://localhost:4321` (desarrollo) o `https://innovatac.com` (producción) | ⚠️ Opcional |

**Para desarrollo local**: Usa `http://localhost:4321`  
**Para producción**: Usa tu dominio real (ej: `https://innovatac.com`)

## 🛠️ Configuración Paso a Paso

### Paso 1: Crear archivo `.env`

Copia el archivo `.env.example` a `.env`:

```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# Windows (CMD)
copy .env.example .env

# Linux/Mac
cp .env.example .env
```

### Paso 2: Editar `.env`

Abre el archivo `.env` y completa las variables:

```env
# Resend API (Obtén tu API Key en https://resend.com/api-keys)
RESEND_API_KEY=tu_api_key_aqui

# Email de origen (debe ser dominio verificado en Resend)
# Para desarrollo, puedes usar: onboarding@resend.dev
RESEND_FROM_EMAIL=noreply@innovatac.com

# Email de destino (donde recibirás los mensajes)
RESEND_TO_EMAIL=francocanteropaul@gmail.com

# URL del sitio (para desarrollo usa localhost)
PUBLIC_SITE_URL=http://localhost:4321
```

### Paso 3: Verificar configuración

1. **Instala las dependencias** (si no lo has hecho):
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abre el navegador**:
   ```
   http://localhost:4321
   ```

4. **Prueba el formulario de contacto**:
   - Ve a `/contacto`
   - Completa el formulario
   - Envía un mensaje
   - Verifica que recibas el email en `RESEND_TO_EMAIL`

## ⚠️ Notas Importantes

### ¿Qué pasa si no configuro Resend?

- El sitio funcionará normalmente
- Verás un error en la consola del navegador al intentar enviar el formulario
- El formulario mostrará un mensaje de error
- **El resto del sitio funcionará perfectamente**

### Límites de Resend (Plan Gratuito)

- **100 emails/día**
- **3,000 emails/mes**
- Perfecto para desarrollo y sitios pequeños

### Seguridad

- **NUNCA** subas el archivo `.env` a Git
- El archivo `.env` ya está en `.gitignore`
- No compartas tu API Key públicamente
- Si expones tu API Key, revócala inmediatamente en Resend

## 🔗 Enlaces Útiles

- **Resend Dashboard**: [https://resend.com/](https://resend.com/)
- **Resend API Keys**: [https://resend.com/api-keys](https://resend.com/api-keys)
- **Resend Documentation**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Pricing**: [https://resend.com/pricing](https://resend.com/pricing)

## 📝 Checklist de Configuración

- [ ] Cuenta creada en Resend
- [ ] API Key obtenida
- [ ] Archivo `.env` creado desde `.env.example`
- [ ] Variables configuradas en `.env`
- [ ] Servidor de desarrollo iniciado (`npm run dev`)
- [ ] Formulario de contacto probado y funcionando

## 🆘 Solución de Problemas

### Error: "RESEND_API_KEY no está configurada"

**Solución**: Verifica que el archivo `.env` existe y contiene `RESEND_API_KEY=tu_api_key`

### Error: "Invalid API Key"

**Solución**: 
1. Verifica que copiaste la API Key completa
2. Asegúrate de que no hay espacios antes o después de la API Key
3. Verifica que la API Key esté activa en Resend

### Error: "Domain not verified" o "Invalid from address"

**Solución**: 
1. **Para desarrollo**: Usa `onboarding@resend.dev` (no requiere verificación)
2. **Para producción**: 
   - Verifica tu dominio en Resend Dashboard (ve a "Domains" → "Add Domain")
   - Usa un email de tu dominio verificado (ej: `noreply@tudominio.com`)
   - **No puedes usar emails de Gmail, Yahoo, Outlook, etc.** sin verificar el dominio completo

### El formulario no envía emails

**Solución**:
1. Abre la consola del navegador (F12)
2. Revisa los errores en la consola
3. Verifica que `RESEND_API_KEY` esté correctamente configurada
4. Verifica que `RESEND_FROM_EMAIL` sea un dominio verificado en Resend

---

**¿Necesitas ayuda?** Revisa la documentación de Resend o contacta al equipo de desarrollo.

