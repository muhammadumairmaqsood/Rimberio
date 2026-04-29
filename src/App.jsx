import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";
import { useEffect } from "react";
import Aos from "aos";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
