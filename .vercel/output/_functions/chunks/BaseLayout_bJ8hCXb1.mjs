import { e as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate, f as createAstro, s as spreadAttributes, n as renderSlot, k as renderComponent, o as renderHead, u as unescapeHTML } from './astro/server_CU9lyQ3U.mjs';
import 'clsx';
/* empty css                            */

const defaultConfig = {
  storageKey: "innovatac-theme",
  attribute: "data-theme"
};
class ThemeManager {
  static instance;
  currentTheme;
  config;
  systemPreference;
  constructor(config = defaultConfig) {
    this.config = config;
    this.systemPreference = this.detectSystemPreference();
    this.currentTheme = this.detectTheme();
    this.applyTheme();
  }
  /**
   * Obtiene la instancia única del manager
   */
  static getInstance(config) {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager(config);
    }
    return ThemeManager.instance;
  }
  /**
   * Detecta la preferencia del sistema
   */
  detectSystemPreference() {
    if (typeof window === "undefined") {
      return "light";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  /**
   * Detecta el tema actual
   * Prioridad: localStorage > system > light
   */
  detectTheme() {
    if (typeof window === "undefined") {
      return "light";
    }
    const stored = localStorage.getItem(this.config.storageKey);
    if (stored && this.isValidTheme(stored)) {
      return stored;
    }
    return "auto";
  }
  /**
   * Verifica si un tema es válido
   */
  isValidTheme(theme) {
    return ["light", "dark", "auto"].includes(theme);
  }
  /**
   * Aplica el tema al documento
   */
  applyTheme() {
    if (typeof document === "undefined") {
      return;
    }
    const effectiveTheme = this.getEffectiveThemeInternal();
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.removeAttribute(this.config.attribute);
    if (this.currentTheme === "auto") {
      html.setAttribute(this.config.attribute, "auto");
    } else {
      html.setAttribute(this.config.attribute, effectiveTheme);
      html.classList.add(effectiveTheme);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("themechange", {
          detail: { theme: this.currentTheme, effective: effectiveTheme }
        })
      );
    }
  }
  /**
   * Establece el tema
   */
  setTheme(theme) {
    if (!this.isValidTheme(theme)) {
      console.warn(`Invalid theme: ${theme}`);
      return;
    }
    this.currentTheme = theme;
    if (typeof window !== "undefined") {
      localStorage.setItem(this.config.storageKey, theme);
    }
    this.applyTheme();
  }
  /**
   * Alterna entre light y dark (ignora 'auto')
   */
  toggleTheme() {
    const effective = this.getEffectiveThemeInternal();
    const newTheme = effective === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }
  /**
   * Obtiene el tema actual
   */
  getTheme() {
    return this.currentTheme;
  }
  /**
   * Obtiene el tema efectivo (método público)
   */
  getEffectiveTheme() {
    return this.getEffectiveThemeInternal();
  }
  /**
   * Obtiene el tema efectivo (método privado interno)
   */
  getEffectiveThemeInternal() {
    if (this.currentTheme === "auto") {
      return this.systemPreference;
    }
    return this.currentTheme;
  }
  /**
   * Escucha cambios en la preferencia del sistema
   */
  watchSystemPreference() {
    if (typeof window === "undefined") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      this.systemPreference = e.matches ? "dark" : "light";
      if (this.currentTheme === "auto") {
        this.applyTheme();
      }
    });
  }
}
const themeManager = ThemeManager.getInstance();
function getTheme() {
  return themeManager.getTheme();
}

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const currentTheme = getTheme();
  const isDark = currentTheme === "dark" || currentTheme === "auto" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return renderTemplate`${maybeRenderHead()}<button type="button" class="inline-flex items-center justify-center p-2 rounded-lg text-light-text-secondary dark:text-[#f8fafc] hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 w-10 h-10"${addAttribute(isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro", "aria-label")} id="theme-toggle"> <span class="sr-only">${isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}</span> <!-- Icono de sol (se muestra en modo oscuro para cambiar a claro) --> <svg id="sun-icon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <!-- Icono de luna (se muestra en modo claro para cambiar a oscuro) --> <svg id="moon-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> ${renderScript($$result, "D:/Datos User/Documents/web_innovatec/src/components/ui/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Datos User/Documents/web_innovatec/src/components/ui/ThemeToggle.astro", void 0);

const $$Astro$5 = createAstro();
const $$LangSwitch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LangSwitch;
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const locales = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-flex items-center"> <button type="button" class="inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium text-light-text-secondary dark:text-[#f5f5f5] hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" aria-label="Cambiar idioma" aria-expanded="false" aria-haspopup="true" id="lang-switch-button"> <span class="sr-only">Idioma actual: ${currentLocale === "es" ? "Espa\xF1ol" : "English"}</span> <span aria-hidden="true">${currentLocale.toUpperCase()}</span> <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div id="lang-switch-menu" class="hidden absolute right-0 top-full mt-2 w-32 bg-light-bg-primary dark:bg-dark-bg-primary rounded-lg shadow-lg border border-light-border dark:border-dark-border py-1 z-50" role="menu" aria-orientation="vertical"> ${locales.map((locale) => renderTemplate`<button type="button"${addAttribute(`w-full text-left px-4 py-2 text-sm transition-colors ${currentLocale === locale.code ? "bg-accent-light dark:bg-opacity-20 text-accent font-medium" : "text-light-text-primary dark:text-white hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary"}`, "class")} role="menuitem"${addAttribute(locale.code, "data-locale")}${addAttribute(`Cambiar a ${locale.label === "ES" ? "Espa\xF1ol" : "English"}`, "aria-label")}> ${locale.label} </button>`)} </div> </div> ${renderScript($$result, "D:/Datos User/Documents/web_innovatec/src/components/ui/LangSwitch.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Datos User/Documents/web_innovatec/src/components/ui/LangSwitch.astro", void 0);

const $$Astro$4 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    type = "button",
    href,
    disabled = false,
    class: className = "",
    ariaLabel
  } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent-hover hover:text-white active:text-white focus-visible:ring-accent",
    secondary: "bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text-primary dark:text-white hover:bg-light-bg-secondary/80 dark:hover:bg-dark-bg-secondary/80 focus-visible:ring-accent",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent",
    ghost: "text-accent hover:bg-accent-light dark:hover:bg-opacity-10 focus-visible:ring-accent"
  };
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}${addAttribute(ariaLabel, "aria-label")}${spreadAttributes(disabled && { "aria-disabled": "true", tabindex: "-1" })}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(classes, "class")}${addAttribute(disabled, "disabled")}${addAttribute(ariaLabel, "aria-label")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "D:/Datos User/Documents/web_innovatec/src/components/ui/Button.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const commonEs = await import('./common_Cfx1Ps8C.mjs');
  const commonEn = await import('./common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const translations = currentLocale === "es" ? commonEs.default : commonEn.default;
  const navItems = [
    { key: "home", href: "/" },
    { key: "services", href: "/servicios" },
    { key: "projects", href: "/proyectos" },
    { key: "testimonials", href: "/testimonios" },
    { key: "about", href: "/sobre-mi" },
    { key: "contact", href: "/contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full bg-light-bg-primary/95 dark:bg-dark-bg-primary backdrop-blur-md border-b border-light-border dark:border-[#1a1a1a]" role="banner"> <nav class="container-custom mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal"> <div class="flex items-center justify-between h-16"> <!-- Logo / Inicio --> <div class="flex-shrink-0"> <a href="/" class="text-xl font-bold text-light-text-primary dark:text-white hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"${addAttribute(translations.site.name, "aria-label")}> ${translations.site.name} </a> </div> <!-- Navegación desktop --> <div class="hidden md:flex md:items-center md:space-x-6"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-sm font-medium text-light-text-secondary dark:text-[#f8fafc] hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded px-2 py-1"> ${translations.nav[item.key]} </a>`)} </div> <!-- Controles (tema, idioma, CTA) --> <div class="flex items-center space-x-4"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} ${renderComponent($$result, "LangSwitch", $$LangSwitch, {})} <div class="hidden md:block"> ${renderComponent($$result, "Button", $$Button, { "href": "/contacto", "variant": "primary", "size": "sm" }, { "default": async ($$result2) => renderTemplate`${translations.cta.contact}` })} </div> <!-- Menú móvil --> <button type="button" class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-light-text-secondary dark:text-[#f8fafc] hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" aria-label="Menú" aria-expanded="false" aria-controls="mobile-menu" id="mobile-menu-button"> <span class="sr-only">Abrir menú</span> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Menú móvil --> <div id="mobile-menu" class="hidden md:hidden pb-4 space-y-2" role="menu" aria-orientation="vertical"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block px-3 py-2 text-base font-medium text-light-text-secondary dark:text-[#f8fafc] hover:text-accent hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" role="menuitem"> ${translations.nav[item.key]} </a>`)} <div class="pt-2"> ${renderComponent($$result, "Button", $$Button, { "href": "/contacto", "variant": "primary", "size": "sm", "class": "w-full" }, { "default": async ($$result2) => renderTemplate`${translations.cta.contact}` })} </div> </div> </nav> </header> ${renderScript($$result, "D:/Datos User/Documents/web_innovatec/src/components/ui/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Datos User/Documents/web_innovatec/src/components/ui/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const commonEs = await import('./common_Cfx1Ps8C.mjs');
  const commonEn = await import('./common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const translations = currentLocale === "es" ? commonEs.default : commonEn.default;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/franco-paul-cantero-brunelli/",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      href: "https://github.com/FranPaulCanteBrun",
      icon: "github"
    }
  ];
  const footerLinks = [
    { key: "home", href: "/" },
    { key: "services", href: "/servicios" },
    { key: "projects", href: "/proyectos" },
    { key: "testimonials", href: "/testimonios" },
    { key: "about", href: "/sobre-mi" },
    { key: "contact", href: "/contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-border dark:border-dark-border" role="contentinfo"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Información de la marca --> <div> <h3 class="text-lg font-bold text-light-text-primary dark:text-white mb-4"> ${translations.site.name} </h3> <p class="text-sm text-light-text-secondary dark:text-[#f5f5f5]"> ${translations.site.description} </p> </div> <!-- Links de navegación --> <div> <h4 class="text-sm font-semibold text-light-text-primary dark:text-white mb-4 uppercase tracking-wider">
Navegación
</h4> <ul class="space-y-2"> ${footerLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-light-text-secondary dark:text-[#f5f5f5] hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"> ${translations.nav[link.key]} </a> </li>`)} </ul> </div> <!-- Redes sociales --> <div> <h4 class="text-sm font-semibold text-light-text-primary dark:text-white mb-4 uppercase tracking-wider">
Redes sociales
</h4> <ul class="flex space-x-4"> ${socialLinks.map((social) => renderTemplate`<li> <a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-10 h-10 rounded-lg text-light-text-secondary dark:text-[#f5f5f5] hover:text-accent hover:bg-light-bg-primary dark:hover:bg-dark-bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"${addAttribute(`Visitar ${social.name}`, "aria-label")}> <span class="sr-only">${social.name}</span> ${social.icon === "linkedin" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg>`} ${social.icon === "github" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg>`} </a> </li>`)} </ul> </div> </div> <!-- Copyright --> <div class="mt-8 pt-8 border-t border-light-border dark:border-dark-border"> <p class="text-center text-sm text-light-text-secondary dark:text-[#f5f5f5]"> ${translations.footer.copyright} </p> <p class="text-center text-xs text-light-text-secondary dark:text-[#f5f5f5] mt-2">
© ${currentYear} ${translations.site.name}. ${translations.footer.rights} </p> </div> </div> </footer>`;
}, "D:/Datos User/Documents/web_innovatec/src/components/ui/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$CookieBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CookieBanner;
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  return renderTemplate`${maybeRenderHead()}<div id="cookie-banner-container"> <div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 bg-light-bg-primary dark:bg-dark-bg-primary border-t border-light-border dark:border-dark-border shadow-lg" role="dialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-description" style="display: none;"> <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-4"> <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"> <!-- Contenido --> <div class="flex-1"> <h3 id="cookie-banner-title" class="text-base font-semibold text-light-text-primary dark:text-white mb-2"> ${currentLocale === "es" ? "Uso de cookies" : "Cookie usage"} </h3> <p id="cookie-banner-description" class="text-sm text-light-text-secondary dark:text-[#f5f5f5]"> ${currentLocale === "es" ? "Este sitio utiliza cookies para mejorar la experiencia del usuario y analizar el tr\xE1fico. Al continuar navegando, acept\xE1s el uso de cookies." : "This site uses cookies to improve user experience and analyze traffic. By continuing to browse, you accept the use of cookies."} </p> <a href="/politica-cookies" class="text-sm text-accent hover:text-accent-hover underline mt-2 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"> ${currentLocale === "es" ? "M\xE1s informaci\xF3n" : "Learn more"} </a> </div> <!-- Botones de acción --> <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto"> <button type="button" id="cookie-accept-all" class="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"> ${currentLocale === "es" ? "Aceptar todas" : "Accept all"} </button> <button type="button" id="cookie-accept-necessary" class="px-4 py-2 text-sm font-medium text-light-text-primary dark:text-white bg-light-bg-secondary dark:bg-dark-bg-secondary hover:bg-opacity-80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"> ${currentLocale === "es" ? "Solo necesarias" : "Necessary only"} </button> </div> </div> </div> </div> </div> ${renderScript($$result, "D:/Datos User/Documents/web_innovatec/src/components/ui/CookieBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Datos User/Documents/web_innovatec/src/components/ui/CookieBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Desarrollo de software y soluciones digitales para PYMES y profesionales",
    ogImage = "/images/og-default.jpg",
    canonical,
    noindex = false
  } = Astro2.props;
  const commonEs = await import('./common_Cfx1Ps8C.mjs');
  const commonEn = await import('./common_BFnml6hP.mjs');
  const localeCookie = Astro2.cookies.get("innovatac-locale");
  const serverLocale = localeCookie?.value === "es" || localeCookie?.value === "en" ? localeCookie.value : "es";
  const currentLocale = serverLocale;
  const translations = currentLocale === "es" ? commonEs.default : commonEn.default;
  const siteUrl = "http://localhost:4321";
  const currentUrl = canonical || Astro2.url.pathname;
  const fullUrl = `${siteUrl}${currentUrl}`;
  return renderTemplate(_a || (_a = __template(["<html", ' class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- SEO Meta Tags --><title>", '</title><meta name="description"', ">", '<link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale"', '><meta property="og:site_name"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicons --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><!-- Preconnect para fuentes --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Schema.org JSON-LD --><script type="application/ld+json">', '</script><script type="application/ld+json">', "</script>", "</head> <body> ", ' <main id="main-content" role="main"> ', " </main> ", " ", " ", " </body> </html>"])), addAttribute(currentLocale, "lang"), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(fullUrl, "href"), addAttribute(fullUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${ogImage}`, "content"), addAttribute(currentLocale === "es" ? "es_ES" : "en_US", "content"), addAttribute(translations.site.name, "content"), addAttribute(fullUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${ogImage}`, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: translations.site.name,
    description: translations.site.description,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    sameAs: [
      "https://www.linkedin.com/in/franco-paul-cantero-brunelli/",
      "https://github.com/FranPaulCanteBrun"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "francocanteropaul@gmail.com"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Franco Paul Cantero Brunelli",
    jobTitle: "Desarrollador de Software",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/franco-paul-cantero-brunelli/",
      "https://github.com/FranPaulCanteBrun"
    ],
    email: "francocanteropaul@gmail.com",
    worksFor: {
      "@type": "Organization",
      name: translations.site.name
    }
  })), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CookieBanner", $$CookieBanner, {}), renderScript($$result, "D:/Datos User/Documents/web_innovatec/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "D:/Datos User/Documents/web_innovatec/src/layouts/BaseLayout.astro", void 0);

export { $$Button as $, $$BaseLayout as a };
