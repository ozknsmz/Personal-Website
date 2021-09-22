import "./Blog.scss"
import image from "./html.jpg"

export default function Blog() {
    return (
        <div className="Blog" id="blog">
            <div className="container">

                <div class="row">
                    <div class="col-md-12">
                        <div class="blog-heading">
                            <h2>BLOG</h2>
                        </div>
                    </div>
                </div>

                <div id="list-items" className="row">
                    <ul>
                        <li className="active">All</li>
                        <li className="active">Web App</li>
                        <li className="active">Mobile App</li>
                        <li className="active">Design</li>
                        <li className="active">Branding</li>
                    </ul>
                </div>

                <div id="post-list" class="row">
                    <div class="col-md-4">
                        <div class="single-blog">
                            <div class="blog-img">
                                <img src="http://themescare.com/demos/fabon-preview2/assets/img/blog-2.jpeg" alt="blog" />
                                <p class="post-date">12 May</p>
                            </div>
                            <div class="blog-text">
                                <h3><a href="#">The best tips of web design </a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit odio ante, id dapibus...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-blog">
                            <div class="blog-img">
                                <img src="http://themescare.com/demos/fabon-preview2/assets/img/blog-2.jpeg" alt="blog" />
                                <p class="post-date">12 May</p>
                            </div>
                            <div class="blog-text">
                                <h3><a href="#">Top budget hacks for your</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit odio ante, id dapibus...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-blog">
                            <div class="blog-img">
                                <img src="http://themescare.com/demos/fabon-preview2/assets/img/blog-2.jpeg" alt="blog" />
                                <p class="post-date">12 May</p>
                            </div>
                            <div class="blog-text">
                                <h3><a href="#">The best tips of web design </a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit odio ante, id dapibus...</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
