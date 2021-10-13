import "./header.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Header() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Developer", "Designer"],
    });
  }, []);

  return (
    <div className="Header-wraper" id="header">
      <div className="main-info">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>
              </h2>
              <h3>
                A web <span ref={textRef}></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <img src={imgbg} alt="" />
      <div className="headerSide">

        </div>
      </div> */
}
