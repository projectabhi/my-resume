import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import Header from "./components/Header";
import MyProfile from "./pages/MyProfile";
import Skills from "./pages/Skills";
import About from "./pages/About";

const ScrollRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    //document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50) {
        if (location.pathname === "/") {
          navigate("/page2");
        }
      } else if (e.deltaY < -50) {
        if (location.pathname === "/page2") {
          navigate("/");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [navigate, location]);

  return (
    <Routes>
      <Route path="/" element={<MyProfile />}>
        <Route index element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="profile" element={<About />} />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollRouter />
    </Router>
  );
}
