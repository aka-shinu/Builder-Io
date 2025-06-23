/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate"

export default {
    content: ['*.{html,js,jsx}'],
  theme: {

    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    
      
    },
  },
  plugins: [animate],
} 