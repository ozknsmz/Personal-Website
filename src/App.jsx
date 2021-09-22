import Topbar from "./Components/Topbar/Topbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume"
import "./app.scss"
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <div className="app">
      <Topbar/>
     <div className="sections">
        {/* <Header/>  */}
       <About/> 
     {/* <Blog/>   */}
     {/* <Resume/> */}
      {/* <Works/>  */}
      {/* <Contact/> */}

      
     </div>
    </div>
  );
}

export default App;
