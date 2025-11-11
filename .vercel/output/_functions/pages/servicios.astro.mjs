import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CU9lyQ3U.mjs';
import { a as $$BaseLayout } from '../chunks/BaseLayout_bJ8hCXb1.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_aBs-uwBy.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  const pagesEs = await import('../chunks/pages_BzSldBwV.mjs');
  const pagesEn = await import('../chunks/pages_BQErpgcy.mjs');
  const servicesEs = await import('../chunks/services_zogoPj6A.mjs');
  const servicesEn = await import('../chunks/services_DcPRDJ2o.mjs');
  const commonEs = await import('../chunks/common_Cfx1Ps8C.mjs');
  const commonEn = await import('../chunks/common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const pages = currentLocale === "es" ? pagesEs.default : pagesEn.default;
  const services = currentLocale === "es" ? servicesEs.default : servicesEn.default;
  const common = currentLocale === "es" ? commonEs.default : commonEn.default;
  const servicesList = [
    { key: "web", icon: "\u{1F310}" },
    { key: "desktop", icon: "\u{1F4BB}" },
    { key: "mobile", icon: "\u{1F4F1}" },
    { key: "consulting", icon: "\u{1F527}" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${pages.services.title} - ${common.site.name}`, "description": pages.services.intro }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 bg-light-bg-primary dark:bg-dark-bg-primary"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-white mb-4"> ${pages.services.title} </h1> <p class="text-xl text-light-text-secondary dark:text-[#f5f5f5] max-w-3xl mx-auto"> ${pages.services.subtitle} </p> <p class="text-lg text-light-text-secondary dark:text-[#f5f5f5] max-w-2xl mx-auto mt-4"> ${pages.services.intro} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"> ${servicesList.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": services[service.key].title, "description": services[service.key].description, "benefits": services[service.key].benefits, "icon": service.icon })}`)} </div> </div> </div> ` })}`;
}, "D:/Datos User/Documents/web_innovatec/src/pages/servicios.astro", void 0);

const $$file = "D:/Datos User/Documents/web_innovatec/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
