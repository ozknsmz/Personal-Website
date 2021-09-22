import './contact.scss'

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row"></div>
                        <div className="row">
                            <div className="contact-section single-section">
                                <div className="row">
                                    <div className="col-12 col-lg-7">
                                        <form action="" className="contact-form" id="contact-form">
                                            <h4 className="content-title">Message Me</h4>
                                            <div className="row">
                                                <div className="col-12 col-md-6 form-group">
                                                    <input className="form-control" type="text" name="Name" id="contact-name" placeholder="Name" required />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input className="form-control" type="text" name="Email" id="contact-email" placeholder="Email" required />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <input className="form-control" type="text" name="Subject" id="contact-subject" placeholder="Subject" required />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <textarea class="form-control" id="contact-message" name="Message" placeholder="Message" ></textarea>
                                                </div>
                                                <div className="col-12 form-submit">
                                                    <button type="button" class="btn btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="col-12 col-lg-5">
                                        <div className="contact-info">
                                            <h4 className="content-title">Contact Me</h4>
                                            <p class="info-description">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                                            <ul>
                                                <li>
                                                    <span><i class="fa fa-map-marker"><br /></i></span>
                                                    <div className="info-details">
                                                        <h6 className="info-type">Name</h6>
                                                        <span class="info-value">Özkan Semiz</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i class="fa fa-calendar"><br /></i></span>
                                                    <div className="info-details">
                                                    <h6 className="info-type">Location</h6>
                                                        <span class="info-value">Ankara / Turkey</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i class="fa fa-phone"></i></span>
                                                    <div className="info-details">
                                                    <h6 className="info-type">Phone</h6>
                                                        <span class="info-value">+90 544 343 1430</span>
                                                    </div>
                                                    
                                                </li>
                                                <li>
                                                    <span><i class="fa fa-envelope"></i></span>
                                                    <div className="info-details">
                                                    <h6 className="info-type">Email</h6>
                                                        <a href="mailto:ozknsmz@hotmail.com">ozknsmz@hotmail.com</a>
                                                    </div>
                                                    
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
