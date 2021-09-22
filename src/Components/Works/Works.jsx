import "./works.scss"
import aybuHome from "./BiltekHomepage.png"
import aybuHome2 from "./BTGhomepage.png"
import alumniHome from "./AlumniHome.jpg"
import eventHome from "./EventHomepage2.jpeg"

export default function works() {

   return (
      <div className="Works">
         <div className="container">
            <div className="row">
               <div className="Works-heading">
               <h1>WORKS</h1>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="card single-service">
                     <a href="#">   {/* ll'add to direction of post */}
                        <div className="service-img">
                           <img src={aybuHome} alt="" />
                           <span className="content-date">
                              12 Aug, 20
                           </span>
                        </div>
                     </a>
                     <h4>Web Development</h4>
                     <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card single-service">
                     <a href="https://ctf.aybubiltek.com/">   {/* ll'add to direction of post */}
                        <div className="service-img">
                           <img src={aybuHome2} alt="" />
                           <span className="content-date">
                              12 Aug, 20
                           </span>
                        </div>
                     </a>
                     <h4>Web Development</h4>
                     <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card single-service">
                     <a href="#">   {/* ll'add to direction of post */}
                        <div className="service-img">
                           <img src={alumniHome} alt="" />
                           <span className="content-date">
                              12 Aug, 20
                           </span>
                        </div>
                     </a>
                     <h4>Web Development</h4>
                     <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="card single-service">
                     <a href="#">   {/* ll'add to direction of post */}
                        <div className="service-img">
                           <img src={eventHome} alt="" />
                           <span className="content-date">
                              12 Aug, 20
                           </span>
                        </div>
                     </a>
                     <h4>Web Development</h4>
                     <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card single-service">
                     <a href="#">   {/* ll'add to direction of post */}
                        <div className="service-img">
                           <img src={aybuHome} alt="" />
                           <span className="content-date">
                              12 Aug, 20
                           </span>
                        </div>
                     </a>
                     <h4>Web Development</h4>
                     <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card single-service">
                     <a href="#">   {/* ll'add to direction of post */}
                        <div className="service-img">
                           <img src={aybuHome} alt="" />
                           <span className="content-date">
                              12 Aug, 20
                           </span>
                        </div>
                     </a>
                     <h4>Web Development</h4>
                     <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
