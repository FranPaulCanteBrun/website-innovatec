import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CU9lyQ3U.mjs';
import { a as $$BaseLayout } from '../chunks/BaseLayout_bJ8hCXb1.mjs';
import { $ as $$TestimonialCard } from '../chunks/TestimonialCard_gjg2Ucp_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Testimonios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonios;
  const pagesEs = await import('../chunks/pages_BzSldBwV.mjs');
  const pagesEn = await import('../chunks/pages_BQErpgcy.mjs');
  const commonEs = await import('../chunks/common_Cfx1Ps8C.mjs');
  const commonEn = await import('../chunks/common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const pages = currentLocale === "es" ? pagesEs.default : pagesEn.default;
  const common = currentLocale === "es" ? commonEs.default : commonEn.default;
  const testimonials = [
    {
      id: 1,
      name: currentLocale === "es" ? "Mar\xEDa Gonz\xE1lez" : "Maria Gonzalez",
      role: currentLocale === "es" ? "Directora, Empresa Local" : "Director, Local Company",
      text: currentLocale === "es" ? "InnovaTec transform\xF3 nuestra presencia online. El sitio web es moderno, r\xE1pido y f\xE1cil de usar. Recomendado 100%." : "InnovaTec transformed our online presence. The website is modern, fast and easy to use. 100% recommended."
    },
    {
      id: 2,
      name: currentLocale === "es" ? "Carlos Rodr\xEDguez" : "Carlos Rodriguez",
      role: currentLocale === "es" ? "Gerente, PYME" : "Manager, SME",
      text: currentLocale === "es" ? "La aplicaci\xF3n de escritorio que desarrollaron optimiz\xF3 nuestros procesos internos. Excelente trabajo y soporte." : "The desktop application they developed optimized our internal processes. Excellent work and support."
    },
    {
      id: 3,
      name: currentLocale === "es" ? "Ana Mart\xEDnez" : "Ana Martinez",
      role: currentLocale === "es" ? "Emprendedora" : "Entrepreneur",
      text: currentLocale === "es" ? "Profesional, cercano y con resultados. InnovaTec entendi\xF3 perfectamente nuestras necesidades." : "Professional, close and with results. InnovaTec perfectly understood our needs."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${pages.testimonials.title} - ${common.site.name}`, "description": pages.testimonials.subtitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 bg-light-bg-primary dark:bg-dark-bg-primary"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-white mb-4"> ${pages.testimonials.title} </h1> <p class="text-xl text-light-text-secondary dark:text-[#f5f5f5] max-w-3xl mx-auto"> ${pages.testimonials.subtitle} </p> </div> ${testimonials.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": testimonial.name, "role": testimonial.role, "text": testimonial.text })}`)} </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-lg text-light-text-secondary dark:text-[#f5f5f5]"> ${pages.testimonials.empty} </p> </div>`} </div> </div> ` })}`;
}, "D:/Datos User/Documents/web_innovatec/src/pages/testimonios.astro", void 0);

const $$file = "D:/Datos User/Documents/web_innovatec/src/pages/testimonios.astro";
const $$url = "/testimonios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
