import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_CU9lyQ3U.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, description, benefits, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-light-bg-primary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-light-border dark:border-[#1a1a1a]"> <div class="text-4xl mb-4" aria-hidden="true"> ${icon} </div> <h3 class="text-xl font-bold text-light-text-primary dark:text-white mb-3"> ${title} </h3> <p class="text-light-text-secondary dark:text-[#f5f5f5] mb-4"> ${description} </p> <ul class="space-y-2"> ${benefits.map((benefit) => renderTemplate`<li class="flex items-start text-sm text-light-text-secondary dark:text-[#f5f5f5]"> <svg class="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>${benefit}</span> </li>`)} </ul> </article>`;
}, "D:/Datos User/Documents/web_innovatec/src/components/sections/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
