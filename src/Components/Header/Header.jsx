import "./header.scss"
import headerImg from "./header.jpg"

export default function Header() {
    return (
        <div className="Header" id="header">
            <div className="headerSide">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Web Developer & Web Designer</h1>
                        <p>Hello, I am a web developer based in Ankara and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.</p>
                        <button type="button" className="btn btn-secondary">SEE MY WORKS</button>
                    </div>
                    <div className="col">
                        column
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}
