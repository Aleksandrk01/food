// tailwind.config.js
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fca5a5', // светлый оттенок красного
          DEFAULT: '#ef4444', // основной красный
          dark: '#b91c1c', // темный оттенок красного
        },
      },
      maxWidth: {
        'desktop': '1200px', // Пример максимальной ширины
      },
    },
  },
  plugins: [],
}
