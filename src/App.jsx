import "./App.css";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Service from "./components/service/Service";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
    return (
        <>
            <Header />
            <Nav />
            <AboutMe />
            <Experience />
            <Service />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
