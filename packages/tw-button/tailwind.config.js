/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0070f3",
                    foreground: "#ffffff",
                },
                destructive: {
                    DEFAULT: "#ff4444",
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#f5f5f5",
                    foreground: "#000000",
                },
                accent: {
                    DEFAULT: "#f5f5f5",
                    foreground: "#000000",
                },
            },
            ringColor: {
                DEFAULT: "#0070f3",
            },
        },
    },
    plugins: [],
} 