import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./home/Home";
import Day from "./day/Day";
import Calendar from "./calendar/Calendar";
import Education from "./education/Education";
import About from "./about/About";

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
