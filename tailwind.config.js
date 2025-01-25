/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "Faculty-Glyphic": '"Faculty Glyphic", serif',
            },
        },
    },
    plugins: [require("daisyui")],
};
