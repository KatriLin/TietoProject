import "./App.css";
import HeaderNav from "./components/HeaderNav.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Studies from "./components/Studies.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderNav />
          <ScrollToTop />
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
