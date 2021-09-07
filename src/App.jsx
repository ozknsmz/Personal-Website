import Topbar from "./Components/Topbar/Topbar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Topbar/>
     <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
