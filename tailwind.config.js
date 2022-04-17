module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
     "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {
       spacing: {
       '340': '22rem',
       },
       colors: {
         'fuckin-gray': '#E3E3E3',
         'dark-gray': '#C4C4C4',
         'btc-orange': '#FF9900',
       },
       boxShadow: {
         'shadowCard': '4px 6px 6px rgba(0, 0, 0, 0.2);',
       }
     },
   },
   plugins: [],
 }