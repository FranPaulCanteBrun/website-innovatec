/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Tokens de color - tema claro
        light: {
          bg: {
            primary: 'var(--color-light-bg-primary)',
            secondary: 'var(--color-light-bg-secondary)',
          },
          text: {
            primary: 'var(--color-light-text-primary)',
            secondary: 'var(--color-light-text-secondary)',
          },
        },
        // Tokens de color - tema oscuro
        dark: {
          bg: {
            primary: 'var(--color-dark-bg-primary)',
            secondary: 'var(--color-dark-bg-secondary)',
          },
          text: {
            primary: 'var(--color-dark-text-primary)',
            secondary: 'var(--color-dark-text-secondary)',
          },
        },
        // Color de acento (azul suave)
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          light: 'var(--color-accent-light)',
        },
      },
      spacing: {
        // Espaciado consistente basado en escala 4px
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

