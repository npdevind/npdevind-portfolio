import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="port_item">
                    <div className="port_item_img">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Portfolio Title</h3>
                    <div className="port_item_cta">
                        <a href="" className="btn">
                            Github
                        </a>
                        <a href="" className="btn">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="port_item">
                    <div className="port_item_img">
                        <img src={img2} alt="" />
                    </div>
                    <h3>Portfolio Title</h3>
                    <div className="port_item_cta">
                        <a href="" className="btn">
                            Github
                        </a>
                        <a href="" className="btn">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="port_item">
                    <div className="port_item_img">
                        <img src={img3} alt="" />
                    </div>
                    <h3>Portfolio Title</h3>
                    <div className="port_item_cta">
                        <a href="" className="btn">
                            Github
                        </a>
                        <a href="" className="btn">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="port_item">
                    <div className="port_item_img">
                        <img src={img4} alt="" />
                    </div>
                    <h3>Portfolio Title</h3>
                    <div className="port_item_cta">
                        <a href="" className="btn">
                            Github
                        </a>
                        <a href="" className="btn">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="port_item">
                    <div className="port_item_img">
                        <img src={img5} alt="" />
                    </div>
                    <h3>Portfolio Title</h3>
                    <div className="port_item_cta">
                        <a href="" className="btn">
                            Github
                        </a>
                        <a href="" className="btn">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="port_item">
                    <div className="port_item_img">
                        <img src={img5} alt="" />
                    </div>
                    <h3>Portfolio Title</h3>
                    <div className="port_item_cta">
                        <a href="" className="btn">
                            Github
                        </a>
                        <a href="" className="btn">
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
