/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'blue-light': '#dbf1fb',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],

  safelist: [
    {
      pattern: /./, // the "." means "everything",
      variants: ['md', 'lg', 'xl', 'hover', 'focus'], // you can add your variants here
    },
  ],
}

