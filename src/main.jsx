import { createRoot } from "react-dom/client";
import "./index.css";
import "./app.css";
import "swiper/css";
import App from "./App.jsx";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme-provider";
createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>,
);
