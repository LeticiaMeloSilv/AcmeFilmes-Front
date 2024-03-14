/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lilas': '#ABA5F0',
        'roxo_cinza': '#404258',
        'amarelo':'#F5E8C7',
        'roxo':'#221F3E',
        'branco':'white',
        'roxo_claro':'#363062',
        'azul':'#435585',
        'gradiente_azul_100':'rgba(42, 59, 104, 1)',
        'gradiente_azul_0':'rgba(67, 85, 133, 0)'
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        'lupa': '32px',
      },
    extend: {
      backgroundImage: {
        'background_lupa': "url('./src/img/lupa.png')",
      },
    },
  },
  plugins: [],
}

