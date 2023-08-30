/* eslint-disable react/no-unescaped-entities */
import CTA from "./CTA";
import "./header.css";
import me from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return (
        <div>
            <header>
                <div className="container header__container">
                    <h5>Hai I'm</h5>
                    <h1 className="name">Nilmoni Patra</h1>
                    <h5 className="text-light">Fullstack Developer</h5>
                    <CTA />
                    <HeaderSocial />

                    <div className="me">
                        <img src={me} alt="me" className="only-img" />
                    </div>

                    <a href="#contact" className="scroll__down">
                        Scroll Down
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Header;
