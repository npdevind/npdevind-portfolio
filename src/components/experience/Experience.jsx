import "./experience.css";
import { MdOutlineControlPoint } from "react-icons/md";
const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Developments</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>Rect Js</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_backend">
                    <h3>Backend Developments</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>Node Js</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>Postgres</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>My Sql</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>Express</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <MdOutlineControlPoint className="exp_icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
