import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./home";
import Day from "./day";
import Calendar from "./calendar";
import Education from "./education";
import About from "./about";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day/:id" element={<Day />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/education" element={<Education />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Router;
