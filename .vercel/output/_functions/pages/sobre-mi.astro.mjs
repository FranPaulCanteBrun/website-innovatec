import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CU9lyQ3U.mjs';
import { a as $$BaseLayout } from '../chunks/BaseLayout_bJ8hCXb1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$SobreMi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SobreMi;
  const pagesEs = await import('../chunks/pages_BzSldBwV.mjs');
  const pagesEn = await import('../chunks/pages_BQErpgcy.mjs');
  const commonEs = await import('../chunks/common_Cfx1Ps8C.mjs');
  const commonEn = await import('../chunks/common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const pages = currentLocale === "es" ? pagesEs.default : pagesEn.default;
  const common = currentLocale === "es" ? commonEs.default : commonEn.default;
  const bio = {
    es: {
      human: "Soy Franco Paul Cantero Brunelli, t\xE9cnico en desarrollo de software apasionado por crear soluciones que realmente importan. Creo en la tecnolog\xEDa como herramienta para mejorar el d\xEDa a d\xEDa de las personas y los negocios, no como un fin en s\xED mismo.",
      technical: "Me especializo en desarrollo full-stack con TypeScript, React, Node.js y bases de datos. Trabajo con metodolog\xEDas \xE1giles, principios SOLID y buenas pr\xE1cticas de ingenier\xEDa de software. Mi enfoque est\xE1 en crear c\xF3digo limpio, mantenible y escalable.",
      philosophy: "Creo en la cercan\xEDa con los clientes, entender sus necesidades reales y ofrecer soluciones simples y confiables. La tecnolog\xEDa debe ser accesible y \xFAtil, sin complicaciones innecesarias."
    },
    en: {
      human: "I am Franco Paul Cantero Brunelli, a software development technician passionate about creating solutions that really matter. I believe in technology as a tool to improve people's and businesses' daily lives, not as an end in itself.",
      technical: "I specialize in full-stack development with TypeScript, React, Node.js and databases. I work with agile methodologies, SOLID principles and software engineering best practices. My focus is on creating clean, maintainable and scalable code.",
      philosophy: "I believe in closeness with clients, understanding their real needs and offering simple and reliable solutions. Technology should be accessible and useful, without unnecessary complications."
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${pages.about.title} - ${common.site.name}`, "description": currentLocale === "es" ? bio.es.human : bio.en.human }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 bg-light-bg-primary dark:bg-dark-bg-primary"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-white mb-4"> ${pages.about.title} </h1> <p class="text-xl text-light-text-secondary dark:text-[#f5f5f5]"> ${pages.about.subtitle} </p> </div> <div class="space-y-8"> <!-- Foto placeholder --> <div class="flex justify-center mb-8"> <div class="w-48 h-48 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary flex items-center justify-center"> <span class="text-6xl" aria-hidden="true">👤</span> </div> </div> <!-- Párrafo humano --> <section> <p class="text-lg text-light-text-primary dark:text-white leading-relaxed"> ${currentLocale === "es" ? bio.es.human : bio.en.human} </p> </section> <!-- Párrafo técnico --> <section> <h2 class="text-2xl font-bold text-light-text-primary dark:text-white mb-4"> ${currentLocale === "es" ? "Experiencia t\xE9cnica" : "Technical experience"} </h2> <p class="text-lg text-light-text-primary dark:text-white leading-relaxed"> ${currentLocale === "es" ? bio.es.technical : bio.en.technical} </p> </section> <!-- Filosofía --> <section> <h2 class="text-2xl font-bold text-light-text-primary dark:text-white mb-4"> ${currentLocale === "es" ? "Filosof\xEDa de trabajo" : "Work philosophy"} </h2> <p class="text-lg text-light-text-primary dark:text-white leading-relaxed"> ${currentLocale === "es" ? bio.es.philosophy : bio.en.philosophy} </p> </section> </div> </div> </div> </div> ` })}`;
}, "D:/Datos User/Documents/web_innovatec/src/pages/sobre-mi.astro", void 0);

const $$file = "D:/Datos User/Documents/web_innovatec/src/pages/sobre-mi.astro";
const $$url = "/sobre-mi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SobreMi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
