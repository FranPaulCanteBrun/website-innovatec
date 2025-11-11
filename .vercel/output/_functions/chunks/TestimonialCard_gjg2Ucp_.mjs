import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_CU9lyQ3U.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { name, role, text, photo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-light-bg-primary dark:bg-dark-bg-secondary rounded-xl p-6 shadow-md border border-light-border dark:border-[#1a1a1a] h-full flex flex-col"> <div class="mb-4"> <svg class="w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"></path> </svg> </div> <blockquote class="flex-1 mb-4"> <p class="text-light-text-primary dark:text-white italic">
"${text}"
</p> </blockquote> <footer class="mt-auto pt-4 border-t border-light-border dark:border-[#1a1a1a]"> <div class="flex items-center"> ${photo && renderTemplate`<img${addAttribute(photo, "src")}${addAttribute(`Foto de ${name}`, "alt")} class="w-12 h-12 rounded-full mr-4 object-cover" loading="lazy">`} <div> <p class="font-semibold text-light-text-primary dark:text-white"> ${name} </p> <p class="text-sm text-light-text-secondary dark:text-[#f5f5f5]"> ${role} </p> </div> </div> </footer> </article>`;
}, "D:/Datos User/Documents/web_innovatec/src/components/sections/TestimonialCard.astro", void 0);

export { $$TestimonialCard as $ };
