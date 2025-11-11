import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CU9lyQ3U.mjs';
import { a as $$BaseLayout } from '../chunks/BaseLayout_bJ8hCXb1.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_By7OSXKF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyectos;
  const pagesEs = await import('../chunks/pages_BzSldBwV.mjs');
  const pagesEn = await import('../chunks/pages_BQErpgcy.mjs');
  const commonEs = await import('../chunks/common_Cfx1Ps8C.mjs');
  const commonEn = await import('../chunks/common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const pages = currentLocale === "es" ? pagesEs.default : pagesEn.default;
  const common = currentLocale === "es" ? commonEs.default : commonEn.default;
  const projects = [
    {
      id: 1,
      title: currentLocale === "es" ? "Sitio Web PYME Local" : "Local SME Website",
      problem: currentLocale === "es" ? "Falta de presencia online" : "Lack of online presence",
      solution: currentLocale === "es" ? "Sitio web responsivo y optimizado" : "Responsive and optimized website",
      impact: currentLocale === "es" ? "Incremento del 50% en consultas" : "50% increase in inquiries",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: currentLocale === "es" ? "App de Gesti\xF3n Interna" : "Internal Management App",
      problem: currentLocale === "es" ? "Procesos manuales ineficientes" : "Inefficient manual processes",
      solution: currentLocale === "es" ? "Aplicaci\xF3n de escritorio personalizada" : "Custom desktop application",
      impact: currentLocale === "es" ? "Reducci\xF3n del 70% en tiempo" : "70% time reduction",
      technologies: ["TypeScript", "Electron"]
    },
    {
      id: 3,
      title: currentLocale === "es" ? "App M\xF3vil para Clientes" : "Mobile App for Clients",
      problem: currentLocale === "es" ? "Acceso limitado a servicios" : "Limited access to services",
      solution: currentLocale === "es" ? "App m\xF3vil nativa iOS/Android" : "Native iOS/Android mobile app",
      impact: currentLocale === "es" ? "Mejora en satisfacci\xF3n del cliente" : "Improved customer satisfaction",
      technologies: ["React Native", "TypeScript"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${pages.projects.title} - ${common.site.name}`, "description": pages.projects.subtitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 bg-light-bg-primary dark:bg-dark-bg-primary"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-white mb-4"> ${pages.projects.title} </h1> <p class="text-xl text-light-text-secondary dark:text-[#f5f5f5] max-w-3xl mx-auto"> ${pages.projects.subtitle} </p> </div> ${projects.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.title, "problem": project.problem, "solution": project.solution, "impact": project.impact, "technologies": project.technologies })}`)} </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-lg text-light-text-secondary dark:text-[#f5f5f5]"> ${pages.projects.empty} </p> </div>`} </div> </div> ` })}`;
}, "D:/Datos User/Documents/web_innovatec/src/pages/proyectos.astro", void 0);

const $$file = "D:/Datos User/Documents/web_innovatec/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
