import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lumin: {
                    black: "#0A0A0A",
                    purble: "#7B3CBF",
                    gray: "1A1A1A",
                    white: "F5F5F5",
                },
            },
        },
    },
    plugins: [],
};
export default config;