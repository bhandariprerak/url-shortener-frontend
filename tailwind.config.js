/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",       // Indigo-600
        secondary: "#F43F5E",     // Rose-500
        accent: "#10B981",        // Emerald-500
        navbarColor: "#F9FAFB",   // Light gray
        btnColor: "#6366F1",      // Indigo-500
        linkColor: "#2563EB",     // Blue-600
        cardBg: "#1E293B",        // Slate-800
        lightText: "#F3F4F6",     // Gray-100
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #4F46E5, #9333EA)",
        "gradient-secondary": "linear-gradient(135deg, #F43F5E, #F59E0B)",
        "gradient-accent": "linear-gradient(90deg, #10B981, #3B82F6)",
        "card-gradient": "linear-gradient(135deg, #1E293B, #3B82F6)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.2)",
        hoverGlow: "0 0 20px rgba(79,70,229,0.6)",
        card: "0 5px 15px rgba(0,0,0,0.3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"], // modern UI font
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        bounceSlow: "bounce 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive", "hover", "group-hover"],
      boxShadow: ["hover", "focus"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};