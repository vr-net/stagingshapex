import type { Config } from "tailwindcss";

export const primaryColor = "#078C61";
export const primaryColorDark = "#231F20";
export const secondaryColor = "#F79421";
export const infoColor = "#0373fc";
export const errorColor = "#f01d1d";
export const grayColor = "#d9d9d9";
export const grayColorDark = "#B0b0b0";
export const whiteColor = "#ffffff";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "370px",
      md: "1100px",
      lg: "1250px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: primaryColor,
      secondary: secondaryColor,
      thiredColor: grayColor,
      whiteColor: whiteColor,
      grayColor: grayColorDark,
      errorColor: errorColor,
      infoColor: infoColor,
    },
    fontSize: {
      sm: "0.938rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
export default config;
