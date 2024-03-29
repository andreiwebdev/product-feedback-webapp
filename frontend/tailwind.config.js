/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                purple: "#AD1FEA",
                blue: "#4661E6",
                lightBlue: "#62BCFA",
                lighterBlue: "#CFD7FF",
                grey: "#F2F4FF",
                lightGrey: "#F7F8FD",
                navy: "#373F68",
                darkNavy: "#3A4374",
                lightNavy: "#647196",
                orange: "#F49F85",
                planned: "#F49F85",
                inProgress: "#AD1FEA",
                live: "#62BCFA",
            },
        },
    },
    plugins: [],
};
