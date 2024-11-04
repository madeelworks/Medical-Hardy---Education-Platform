/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
sm:'480px',
md:'768px',
lg:'976px',
xl:'1440',
    },
    extend: {
      colors:{
    green: 'hsl(95,32%,61%)',
    dangercolor:'hsl(0,77%,58%)',
    black:'hsl(228,28%,20%)',
    palePinkColor:'hsl(359,100%,97%)',
    neutralGraycolor:'hsl(0,0%,45%)',
      }
    },
  },
  plugins: [],
}

