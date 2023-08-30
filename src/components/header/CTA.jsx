/* eslint-disable react/no-unescaped-entities */
import cv from "../../assets/cv.pdf";
const CTA = () => {
  return (
    <>
      <div className="cta">
        <a href={cv} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's talk
        </a>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
