import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer"];
  const period = 2000;

  const handleClick = () => {
    const phoneNumber = "7025040484"; // Replace with the phone number you want to connect with
    const message = "Hello, I would Like Contact with you!"; // Optional: Default message to send
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

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
    <section className="banner" id="about">
      <Container>
        <TrackVisibility>
          <div>
            <h1>About me</h1>
            <p>
              Passionate Full Stack Developer with expertise in JavaScript,
              React.js, Boostrap, and Laravel. Quick learner, dedicated to
              crafting innovative web solutions and committed to seamless user
              experiences. Eager to contribute to digital transformation
              projects with a focus on quality code and creative problem
              solving.
            </p>
            <br />
            <p>
              My job is to build your website so that it is functional and
              user-friendly but at the same time attractive. Moreover, I add
              personal touch to your product and make sure that is eye-catching
              and easy to use. My aim is to bring across your message and
              identity in the most creative way. I created web design for many
              famous brand companies.
            </p>
          </div>
        </TrackVisibility>
      </Container>
    </section>
  );
};
