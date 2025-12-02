export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for your app
        primary: '#e74c3c', // That nice red/orange you had
        dark: '#1a1a1a',
        card: '#2d2d2d',
      }
    },
  },
  plugins: [],
}