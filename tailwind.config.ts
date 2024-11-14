import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-bg": "#1f1f38",
        "clr-bg-variant": "#2c2c6c",
        "clr-primary": "#4db5ff",
        "clr-primary-variant": "rgba(77,181,255,0.4)",
        "clr-white": "#fff",
        "clr-light": "rgba(255,255,255,0.6)",
      },
      spacing: {
        "container-lg": "75%",
        "container-md": "86%",
        "container-sm": "90%",
      },
      lineHeight: {
        relaxed: "1.7",
      },
      transitionProperty: {
        custom: "all 400ms ease",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'texture': "url('/images/bg-texture.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
