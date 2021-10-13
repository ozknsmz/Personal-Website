import "./works.scss";
import aybuHome2 from "../images/works-bg.png";

export default function works() {
  return (
    <div className="Works">
      <div className="container">
        <h3 className="education-title">WORKS</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card single-service">
              <a href="#">
                {" "}
                {/* ll'add to direction of post */}
                <div className="service-img">
                  <img src={aybuHome2} alt="" />
                  <span className="content-date">12 Aug, 20</span>
                </div>
              </a>
              <h4>Biltek Website</h4>
              <p>
                The website is developed for Ankara Yıldırım Beyazıt University
                students by Science and Technology...
              </p>
              <div class="works-read-me">
                <a href="#">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card single-service">
              <a href="https://ctf.aybubiltek.com/">
                {" "}
                {/* ll'add to direction of post */}
                <div className="service-img">
                  <img src={aybuHome2} alt="" />
                  <span className="content-date">12 Aug, 20</span>
                </div>
              </a>
              <h4>Biltek BTG Website</h4>
              <p>
                The website was developed to promote the CTF competition
                organized by Biltek Club and to register...
              </p>
              <div class="works-read-me">
                <a href="#">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card single-service">
              <a href="#">
                {" "}
                {/* ll'add to direction of post */}
                <div className="service-img">
                  <img src={aybuHome2} alt="" />
                  <span className="content-date">12 Aug, 20</span>
                </div>
              </a>
              <h4>AYBU Alumni App</h4>
              <p>
                This repository created for CENG310 Human Computer Interaction
                class...
              </p>
              <div class="works-read-me">
                <a href="#">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card single-service">
              <a href="#">
                {" "}
                {/* ll'add to direction of post */}
                <div className="service-img">
                  <img src={aybuHome2} alt="" />
                  <span className="content-date">12 Aug, 20</span>
                </div>
              </a>
              <h4>Event Tracking System</h4>
              <p>
                Event Tracking System is the process of collecting information
                about of details like Events Date, Place...
              </p>
              <div class="works-read-me">
                <a href="#">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card single-service">
              <a href="#">
                {" "}
                {/* ll'add to direction of post */}
                <div className="service-img">
                  <img src={aybuHome2} alt="" />
                  <span className="content-date">12 Aug, 20</span>
                </div>
              </a>
              <h4>Personal Website</h4>
              <p>
                This project is a personal website developed with React for blog
                sharing and showing the work done.
              </p>
              <div class="works-read-me">
                <a href="#">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card single-service">
              <a href="#">
                {" "}
                {/* ll'add to direction of post */}
                <div className="service-img">
                  <img src={aybuHome2} alt="" />
                  <span className="content-date">12 Aug, 20</span>
                </div>
              </a>
              <h4>Standard Calculator</h4>
              <p>
                This standard calculator was developed mobile compatible using
                android studio.
              </p>
              <div class="works-read-me">
                <a href="#">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
