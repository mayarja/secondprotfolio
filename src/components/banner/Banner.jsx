import React, { useEffect, useState } from "react";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import "./banner.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["ui/ux Designer", "Graphic Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="banner" id="home">
      <div className="container">
        <div className="aligh-items-center row">
          <div className="col-xl-5 col-lg-6 col-sm-12">
            <div className={"animate__animated animate__fadeIn"}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__bounce" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi! I'm Qamar`}{" "}
                      <span
                        className="txt-rotate"
                        data-rotate='[ "ui/ux Designer", "Graphic Design" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      I am a UI/UX designer with two years of experience in this
                      domain. I have worked on application and website UI/UX
                      design, and I can also create logos and posts.
                    </p>
                    <a
                      href="#contact"
                      className="btn btn-light d-flex gap-2"
                      style={{ width: "fit-content" }}
                    >
                      Let’s Connect
                      <ArrowRightCircle size={25} />
                    </a>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6 col-sm-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    !isVisible
                      ? "animate__animated animate__zoomIn __delay-2s"
                      : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
