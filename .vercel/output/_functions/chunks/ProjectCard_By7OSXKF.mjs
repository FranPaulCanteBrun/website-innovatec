import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_CU9lyQ3U.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, problem, solution, impact, technologies } = Astro2.props;
  const pagesEs = await import('./pages_BzSldBwV.mjs');
  const pagesEn = await import('./pages_BQErpgcy.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const pages = currentLocale === "es" ? pagesEs.default : pagesEn.default;
  return renderTemplate`${maybeRenderHead()}<article class="bg-light-bg-primary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-light-border dark:border-[#1a1a1a] h-full flex flex-col"> <h3 class="text-xl font-bold text-light-text-primary dark:text-white mb-4"> ${title} </h3> <div class="space-y-4 flex-1"> <div> <h4 class="text-sm font-semibold text-light-text-secondary dark:text-[#e0e0e0] mb-2 uppercase tracking-wider"> ${pages.projects.problem} </h4> <p class="text-light-text-primary dark:text-white"> ${problem} </p> </div> <div> <h4 class="text-sm font-semibold text-light-text-secondary dark:text-[#e0e0e0] mb-2 uppercase tracking-wider"> ${pages.projects.solution} </h4> <p class="text-light-text-primary dark:text-white"> ${solution} </p> </div> <div> <h4 class="text-sm font-semibold text-light-text-secondary dark:text-[#e0e0e0] mb-2 uppercase tracking-wider"> ${pages.projects.impact} </h4> <p class="text-light-text-primary dark:text-white font-medium"> ${impact} </p> </div> </div> ${technologies.length > 0 && renderTemplate`<div class="mt-6 pt-4 border-t border-light-border dark:border-dark-border"> <div class="flex flex-wrap gap-2"> ${technologies.map((tech) => renderTemplate`<span class="px-3 py-1 text-xs font-medium bg-accent-light dark:bg-[#1a1a1a] text-accent dark:text-[#d0d0d0] rounded-full border border-light-border dark:border-[#2a2a2a]"> ${tech} </span>`)} </div> </div>`} </article>`;
}, "D:/Datos User/Documents/web_innovatec/src/components/sections/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
