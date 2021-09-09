import Topbar from "./Components/Topbar/Topbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Topbar/>
     <div className="sections">
      <Header/>
      <About/>
     </div>
    </div>
  );
}

export default App;
