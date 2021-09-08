import "./topbar.scss"
import logo from "./logo.png"

export default function Topbar() {
    return (
        <header>
            <div className="Topbar" id="topbar">
                <div className="topleft">
                    <a href="">ozknsmz.<span className="logo"></span></a>
                </div>
                <div className="topright">
                <div className="toprightList">
                        <li className="toprightListItem">HOMEPAGE</li>
                        <li className="toprightListItem">ABOUT</li>
                        <li className="toprightListItem">WORKS</li>
                        <li className="toprightListItem">BLOG</li>
                        <li className="toprightListItem">CONTACT</li>
                    </div>
                </div>
            </div>
        </header>
    )
}
