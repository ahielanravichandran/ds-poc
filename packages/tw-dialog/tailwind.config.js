/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "white",
                foreground: "black",
                muted: {
                    foreground: "rgb(115 115 115)",
                },
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "fade-out": {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
            },
            animation: {
                "fade-in": "fade-in 200ms ease-in-out",
                "fade-out": "fade-out 200ms ease-in-out",
            },
        },
    },
    plugins: [],
} 