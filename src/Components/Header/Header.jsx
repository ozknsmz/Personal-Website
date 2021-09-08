import "./header.scss"
import headerimg from "./header.jpg"

export default function Header() {
    return (
        <div className="Header" id="header">
            <img src={headerimg} alt="" />
            <div className="headerTitles">
                <div className="container">
                    <span className="headerTitleLg">Hi, I'm Ozkan Semiz.</span>
                    <span className="headerTitleSm" >
                        <b className="is-visible">A Web Designer.</b>
                        <b className="is-hidden">A Web Developer</b>
                    </span>
                </div>
            </div>
        </div>
    )
}
