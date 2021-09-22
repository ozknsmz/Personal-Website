import "./header.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Header() {
    const textRef =useRef();
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false,
            backDelay:1500,
            backSpeed:50,            
            strings: ["Developer","Designer"], })
    },[]);
    return (
        <div className="Header" id="header">
            <div className="headerSide">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Hi There, I'm &nbsp;<span>Özkan Semiz</span></h2>
                        <h3>A web <span ref={textRef}></span></h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
