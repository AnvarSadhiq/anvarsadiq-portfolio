import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fitmaster from "../assets/img/fitmaster.png";
import ugdiet from "../assets/img/ugdiet.png";
import gelcargo from "../assets/img/gelcargo.png";
import phone1 from "../assets/img/phone1.png";
import phone2 from "../assets/img/phone2.png";
import phone3 from "../assets/img/phone3.png";

import webapp1 from "../assets/img/private-site.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const website = [
    {
      title: "Dieting Website",
      description: "Design & Development",
      imgUrl: fitmaster,
    },
    {
      title: "Cargo Website",
      description: "Design & Development",
      imgUrl: gelcargo,
    },
    {
      title: "Dieting Website",
      description: "Design & Development",
      imgUrl: ugdiet,
    },
    {
      title: "Private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
    {
      title: "Private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
    {
      title: "Private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
  ];

  const webapps = [
    {
      title: "private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
    {
      title: "private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
    {
      title: "private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
    {
      title: "private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
    {
      title: "private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
    {
      title: "private Site",
      description: "This is a private Site",
      imgUrl: webapp1,
    },
  ];

  const figma = [
    {
      title: "private Design",
      description: "This is a private Design",
      imgUrl: phone1,
    },
    {
      title: "private Design",
      description: "This is a private Design",
      imgUrl: phone2,
    },
    {
      title: "private Design",
      description: "This is a private Design",
      imgUrl: phone3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Portfolio</h2>
                  {/* <p></p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Websites</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">UI/UX</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {website.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {webapps.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {figma.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
