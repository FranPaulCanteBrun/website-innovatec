import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as renderScript, r as renderTemplate } from '../chunks/astro/server_CU9lyQ3U.mjs';
import { $ as $$Button, a as $$BaseLayout } from '../chunks/BaseLayout_bJ8hCXb1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const pagesEs = await import('../chunks/pages_BzSldBwV.mjs');
  const pagesEn = await import('../chunks/pages_BQErpgcy.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const translations = currentLocale === "es" ? pagesEs.default : pagesEn.default;
  return renderTemplate`${maybeRenderHead()}<form id="contact-form" class="space-y-6" novalidate${addAttribute(translations.contact.form.send, "aria-label")}${addAttribute(currentLocale, "data-locale")}> <!-- Campo nombre --> <div> <label for="contact-name" class="block text-sm font-medium text-light-text-primary dark:text-white mb-2"> ${translations.contact.form.name} <span class="text-error" aria-label="requerido">*</span> </label> <input type="text" id="contact-name" name="name" required minlength="2" maxlength="100" autocomplete="name" class="w-full px-4 py-2 text-base text-light-text-primary dark:text-white bg-light-bg-primary dark:bg-dark-bg-primary border border-light-border dark:border-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors" aria-describedby="name-error"> <p id="name-error" class="mt-1 text-sm text-error hidden" role="alert"></p> </div> <!-- Campo email --> <div> <label for="contact-email" class="block text-sm font-medium text-light-text-primary dark:text-white mb-2"> ${translations.contact.form.email} <span class="text-error" aria-label="requerido">*</span> </label> <input type="email" id="contact-email" name="email" required minlength="5" maxlength="255" autocomplete="email" class="w-full px-4 py-2 text-base text-light-text-primary dark:text-white bg-light-bg-primary dark:bg-dark-bg-primary border border-light-border dark:border-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors" aria-describedby="email-error"> <p id="email-error" class="mt-1 text-sm text-error hidden" role="alert"></p> </div> <!-- Campo mensaje --> <div> <label for="contact-message" class="block text-sm font-medium text-light-text-primary dark:text-white mb-2"> ${translations.contact.form.message} <span class="text-error" aria-label="requerido">*</span> </label> <textarea id="contact-message" name="message" required minlength="10" maxlength="2000" rows="6" class="w-full px-4 py-2 text-base text-light-text-primary dark:text-dark-text-primary bg-light-bg-primary dark:bg-dark-bg-primary border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-y" aria-describedby="message-error"></textarea> <p id="message-error" class="mt-1 text-sm text-error hidden" role="alert"></p> </div> <!-- Honeypot field (oculto para humanos, visible para bots) --> <div class="sr-only" aria-hidden="true"> <label for="contact-website">No completar este campo</label> <input type="text" id="contact-website" name="website" tabindex="-1" autocomplete="off"> </div> <!-- Mensaje de éxito/error --> <div id="form-message" class="hidden p-4 rounded-lg" role="alert" aria-live="polite"></div> <!-- Botón de envío --> <div> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "w-full sm:w-auto" }, { "default": async ($$result2) => renderTemplate` <span id="submit-text">${translations.contact.form.send}</span> <span id="submit-loading" class="hidden"> ${translations.contact.form.sending} </span> ` })} </div> </form> ${renderScript($$result, "D:/Datos User/Documents/web_innovatec/src/components/forms/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Datos User/Documents/web_innovatec/src/components/forms/ContactForm.astro", void 0);

const $$Astro = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  const pagesEs = await import('../chunks/pages_BzSldBwV.mjs');
  const pagesEn = await import('../chunks/pages_BQErpgcy.mjs');
  const commonEs = await import('../chunks/common_Cfx1Ps8C.mjs');
  const commonEn = await import('../chunks/common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const pages = currentLocale === "es" ? pagesEs.default : pagesEn.default;
  const common = currentLocale === "es" ? commonEs.default : commonEn.default;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${pages.contact.title} - ${common.site.name}`, "description": pages.contact.subtitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 bg-light-bg-primary dark:bg-dark-bg-primary"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-white mb-4"> ${pages.contact.title} </h1> <p class="text-xl text-light-text-secondary dark:text-[#f5f5f5]"> ${pages.contact.subtitle} </p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Formulario --> <div> <h2 class="text-2xl font-bold text-light-text-primary dark:text-white mb-6"> ${currentLocale === "es" ? "Enviame un mensaje" : "Send me a message"} </h2> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> <!-- Información de contacto --> <div> <h2 class="text-2xl font-bold text-light-text-primary dark:text-white mb-6"> ${currentLocale === "es" ? "Informaci\xF3n de contacto" : "Contact information"} </h2> <div class="space-y-6"> <div> <h3 class="text-lg font-semibold text-light-text-primary dark:text-white mb-2"> ${currentLocale === "es" ? "Email" : "Email"} </h3> <a href="mailto:francocanteropaul@gmail.com" class="text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
francocanteropaul@gmail.com
</a> </div> <div> <h3 class="text-lg font-semibold text-light-text-primary dark:text-white mb-2"> ${currentLocale === "es" ? "Redes sociales" : "Social networks"} </h3> <div class="flex space-x-4"> <a href="https://www.linkedin.com/in/franco-paul-cantero-brunelli/" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded" aria-label="LinkedIn">
LinkedIn
</a> <a href="https://github.com/FranPaulCanteBrun" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded" aria-label="GitHub">
GitHub
</a> </div> </div> </div> </div> </div> </div> </div> </div> ` })}`;
}, "D:/Datos User/Documents/web_innovatec/src/pages/contacto.astro", void 0);

const $$file = "D:/Datos User/Documents/web_innovatec/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
