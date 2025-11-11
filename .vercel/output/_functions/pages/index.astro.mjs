import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_CU9lyQ3U.mjs';
import { $ as $$Button, a as $$BaseLayout } from '../chunks/BaseLayout_bJ8hCXb1.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_aBs-uwBy.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_By7OSXKF.mjs';
import { $ as $$TestimonialCard } from '../chunks/TestimonialCard_gjg2Ucp_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const pagesEs = await import('../chunks/pages_BzSldBwV.mjs');
  const pagesEn = await import('../chunks/pages_BQErpgcy.mjs');
  const commonEs = await import('../chunks/common_Cfx1Ps8C.mjs');
  const commonEn = await import('../chunks/common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const pages = currentLocale === "es" ? pagesEs.default : pagesEn.default;
  const common = currentLocale === "es" ? commonEs.default : commonEn.default;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-20 md:py-32 bg-gradient-to-br from-accent/10 to-accent-light/20 dark:from-dark-bg-primary dark:to-dark-bg-secondary" aria-labelledby="hero-title"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl mx-auto text-center"> <h1 id="hero-title" class="text-4xl md:text-5xl lg:text-6xl font-bold text-light-text-primary dark:text-white mb-6 leading-tight"> ${pages.home.hero.title} </h1> <p class="text-xl md:text-2xl text-light-text-secondary dark:text-[#f8fafc] mb-8 leading-relaxed"> ${pages.home.hero.subtitle} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result, "Button", $$Button, { "href": "/contacto", "variant": "primary", "size": "lg" }, { "default": async ($$result2) => renderTemplate`${pages.home.hero.cta}` })} ${renderComponent($$result, "Button", $$Button, { "href": "/servicios", "variant": "outline", "size": "lg" }, { "default": async ($$result2) => renderTemplate`${common.cta.learnMore}` })} </div> </div> </div> </section>`;
}, "D:/Datos User/Documents/web_innovatec/src/components/sections/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${common.site.name} - ${pages.home.hero.title}`, "description": common.site.description }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})}  ${maybeRenderHead()}<section class="py-16 bg-light-bg-secondary dark:bg-dark-bg-secondary" aria-labelledby="services-title"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 id="services-title" class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-white mb-4"> ${pages.home.services.title} </h2> <p class="text-lg text-light-text-secondary dark:text-[#f5f5f5] max-w-2xl mx-auto"> ${pages.home.services.subtitle} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${servicesList.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": services[service.key].title, "description": services[service.key].description, "benefits": services[service.key].benefits, "icon": service.icon })}`)} </div> </div> </section>  <section class="py-16 bg-light-bg-primary dark:bg-dark-bg-primary" aria-labelledby="projects-title"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 id="projects-title" class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-white mb-4"> ${pages.home.projects.title} </h2> <p class="text-lg text-light-text-secondary dark:text-[#f5f5f5] max-w-2xl mx-auto"> ${pages.home.projects.subtitle} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.title, "problem": project.problem, "solution": project.solution, "impact": project.impact, "technologies": project.technologies })}`)} </div> <div class="text-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "/proyectos", "variant": "outline", "size": "lg" }, { "default": async ($$result3) => renderTemplate`${pages.home.projects.viewAll}` })} </div> </div> </section>  <section class="py-16 bg-light-bg-secondary dark:bg-dark-bg-secondary" aria-labelledby="testimonials-title"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 id="testimonials-title" class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-white mb-4"> ${pages.home.testimonials.title} </h2> <p class="text-lg text-light-text-secondary dark:text-[#f5f5f5] max-w-2xl mx-auto"> ${pages.home.testimonials.subtitle} </p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": testimonial.name, "role": testimonial.role, "text": testimonial.text })}`)} </div> <div class="text-center mt-8"> ${renderComponent($$result2, "Button", $$Button, { "href": "/testimonios", "variant": "outline", "size": "lg" }, { "default": async ($$result3) => renderTemplate`${common.cta.learnMore}` })} </div> </div> </section> ` })}`;
}, "D:/Datos User/Documents/web_innovatec/src/pages/index.astro", void 0);

const $$file = "D:/Datos User/Documents/web_innovatec/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
