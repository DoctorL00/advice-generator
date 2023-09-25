/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            lightCyan: "hsl(193, 38%, 86%)",
            neonGreen: "hsl(150, 100%, 66%)",
            grayishBlue: "hsl(217, 19%, 38%)",
            darkGrayishBlue: "hsl(217, 19%, 24%)",
            darkBlue: "hsl(218, 23%, 16%)"
        },
        fontFamily: {
          'manrope':['Manrope','sans-serif']
        },
        extend: {},
    },
    plugins: [],
}

// ### Primary
//
// - Light Cyan: hsl(193, 38%, 86%)
// - Neon Green: hsl(150, 100%, 66%)
//
// ### Neutral
//
// - Grayish Blue: hsl(217, 19%, 38%)
// - Dark Grayish Blue: hsl(217, 19%, 24%)
// - Dark Blue: hsl(218, 23%, 16%)
