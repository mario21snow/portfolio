import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg10 from "../assets/img/project-img10.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business ",
      description: "Frontend Development",
      imgUrl: projImg1,
    },
    {
      title: "ui/ux ",
      description: "Design Development",
      imgUrl: projImg2,
    },
    {
      title: "Startup website ",
      description: "ui/ux desiging",
      imgUrl: projImg3,
    },
    {
      title: "number game",
      description: "web Development",
      imgUrl: projImg9,
    },
    {
      title: "Payment gatway",
      description: "web Development",
      imgUrl: projImg8,
    },
    {
      title: "Basis bank system",
      description: "Full stack  Development",
      imgUrl: projImg4,
    },
    {
      title: "random quote genrater",
      description: "web Development",
      imgUrl: projImg10,
    },
    {
      title: "chatgpt clone",
      description: "React Development",
      imgUrl: projImg7,
    },
    {
      title: "youtub clone",
      description: "web  Development",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>From websites with pastel hues to intelligent ML models, infused with little bit of playfulness. So go ahead, and take a look around 💖.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
