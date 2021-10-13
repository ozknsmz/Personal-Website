import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="Footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <a href="">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li></li>
              </ul>
              <p className="copy-right">
                <i class="far fa-copyright" aria-hidden="true"></i>
                2021 Personal Website, By Ozkan Semiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
