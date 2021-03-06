import "./about.scss";
import aboutImg from "../images/about.png";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="colImg">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>

        <div className="about-right-part row">
          <div id="about-left-col" className="col">
            <h1>Hey, I'm Özkan Semiz</h1>
            <p>
              Hello, I am a web developer based in Ankara and happy to travel
              all over Europe to capture your big day in candid and authentic
              photos. I will create a lasting memory of the people.
            </p>
            <ul>
              <li>
                <span>
                  <i class="fa fa-map-marker"></i> Location{" "}
                </span>
                : Ankara, Turkey.
              </li>
              <li>
                <span>
                  <i class="fa fa-calendar"></i> Age{" "}
                </span>
                : 24
              </li>
              <li>
                <span>
                  <i class="fa fa-phone"></i> Phone{" "}
                </span>
                : +90 544 343 1430
              </li>
              <li>
                <span>
                  <i class="fa fa-envelope"></i> Email :
                  <a href="mailto:ozknsmz@hotmail.com">ozknsmz@hotmail.com</a>{" "}
                </span>
              </li>
            </ul>
            <button type="button" class="btn btn-secondary">
              Download CV
            </button>
          </div>
          <div className="about-right-col col">
            <h2 className="skills-title">Skills Bar</h2>
            <div className="skillbarfill">
              <div className="skill">
                <p>HTML5/CSS3</p>
                <div class="skill-bar skill1 wow slideInLeft animated"></div>
              </div>
              <div className="skill">
                <p>JAVA</p>
                <div class="skill-bar skill2 wow slideInLeft animated"></div>
              </div>
              <div className="skill">
                <p>JAVASCRIPT</p>
                <div class="skill-bar skill3 wow slideInLeft animated"></div>
              </div>
              <div className="skill">
                <p>C</p>
                <div class="skill-bar skill4 wow slideInLeft animated"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
