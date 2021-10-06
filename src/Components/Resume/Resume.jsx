import './resume.scss'

export default function Resume() {
  return (
    <div className="Resume" id="resume">
      <h3 className="education-title">
        EDUCATİON
      </h3>
      <div className="timeline">

        <div className="timeline-container left">
          <div className="education-part">
            <div className="resume-item">
              <h5 className="item-title">Ankara Yıldırım Beyazıt Univeristy</h5>
              <span><div className="item-details">Computer Engineering / 2017 - Present </div></span>
              <div className="item-description">GPA : 3.05 / 4.00</div>
            </div>
          </div>

        </div>
        <div className="timeline-container right">
          <div className="education-part">
            <div className="resume-item">
              <h5 className="item-title">Rize Fener High School</h5>
              <span><div className="item-details">Mathematics-Science Department / 2011 - 2015 </div></span>
              <div className="item-description">GPA : 76 / 100</div>
            </div>
          </div>
        </div>

        <div className="timeline-container left">
          <div className="education-part">
            <div className="resume-item">
              <h5 className="item-title">Cengiz Holding</h5>
              <span><div className="item-details">Network Engineer Intern / 08/2020 - 09-2020 </div></span>
              <div className="item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab facilis dolorum aut sint quisquam expedita cum dicta iusto numquam.</div>
            </div>
          </div>
        </div>

        <div className="timeline-container right">
          <div className="education-part">
            <div className="resume-item">
              <h5 className="item-title">Young International Relations Board Association</h5>
              <span><div className="item-details">Business Development Coordinator Intern / 05/2021 - 08-2021 </div></span>
              <div className="item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab facilis dolorum aut sint quisquam expedita cum dicta iusto numquam.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
