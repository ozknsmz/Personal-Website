import Topbar from "./Components/Topbar/Topbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume"
import Footer from "./Components/Footer/Footer"
import "./app.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
      setLoading(false)
      },2000)
  },[]);

  const spinnerCss = css`
  border-color: red;
  color: #36D7B7;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%); 
`;

  return (
    <div className="app">
      {
        loading ? 
        <CircleLoader
        loading={loading}
        css = {spinnerCss}
        size={100}
        color = {'#F37A24'}
         />
        :
        <div className="sections">
        <Topbar/>
        <Header/> 
        <About/>
        <Resume/> 
        <Works/>
        <Blog/> 
        <Contact/> 
        <Footer/>
        </div>
      }
    </div>
  );
}

export default App;
