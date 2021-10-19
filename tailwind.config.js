module.exports = {
  mode:'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}',
        './helpers/**/*.{js,ts,jsx,tsx}',
        // Add more here
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}