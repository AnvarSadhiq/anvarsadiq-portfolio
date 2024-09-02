import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Service = () => {
  return (
    <section className="resumebanner" id="service">
      <Container>
        <TrackVisibility>
          <article className="resume active">
            {/* Resume Header */}
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>

            {/* Education Section */}
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box"></div>
                <h3 className="h3">Education</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    University of Calicut
                  </h4>
                  <span>2020 - 2023</span>
                  <p className="timeline-text">
                    Bachelor of Computer Application
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Goverment Higher Secondary School
                  </h4>
                  <span>2018 - 2020</span>
                  <p className="timeline-text">Higer Secondary</p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Goverment Higher School
                  </h4>
                  <span>2015 - 2018</span>
                  <p className="timeline-text">Higher School</p>
                </li>
              </ol>
           
              <div className="title-wrapper">
                <div className="icon-box"></div>
                <h3 className="h3">Experience</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Software Developer</h4>
                  <span>July 2024 - Present</span>
                  <p className="timeline-text">Ajwa Creatives</p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">React Developer</h4>
                  <span>Aug 2023 - Mar 2024</span>
                  <p className="timeline-text">Tiamtec Pvt Ltd</p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Angular Developer</h4>
                  <span>Jun 2022 - May 2023</span>
                  <p className="timeline-text">
                    Nemo enim ipsam voluptatem, blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et quas molestias
                    exceptur.
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Angular Trainee</h4>
                  <span>July 2020 - Feb 2021</span>
                  <p className="timeline-text">Em.Mincetech</p>
                </li>
              </ol>
            </section>
          </article>
        </TrackVisibility>
      </Container>
    </section>
  );
};
