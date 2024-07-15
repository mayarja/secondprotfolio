import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import blog from "../../assets/img/blogimage.png";
import socialimage from "../../assets/img/socialimage.png";
import hotelsimage from "../../assets/img/hotelsimage.png";
import foodo from "../../assets/img/foodo.jpg";
import Home from "../../assets/img/Home.jpg";
import esmile from "../../assets/img/esmile.jpg";
import hadity from "../../assets/img/hadity.jpg";
import Sela from "../../assets/img/sela.png";
import Modern from "../../assets/img/modern-arc.png";
import fatehclub from "../../assets/img/fateh.png";
import garden from "../../assets/img/garden.jpg";
import milionimage from "../../assets/img/milionimage.png";
import eco1image from "../../assets/img/eco1image.png";
import weatherimage from "../../assets/img/weatherimage.png";
import kitchenimage from "../../assets/img/kitchenimage.png";
import "animate.css";
import "./Projects.css";
import Project from "./Project";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Projects() {
  const projects1 = [
    {
      title: "هديتي",
      description:
        " هديتي is an e-commerce platform dedicated to facilitating the sale of various products in Syria. Users can purchase items from the store and earn coins, which can be redeemed for products.",
      imgUrl: hadity,
      page: "https://drive.google.com/drive/folders/1A7buof3m9YP9aEG-vjVvHUtNAZ3X__Il",
      code: "",
      company: "Peak Link",
    },
    {
      title: "Garden",
      description:
        "Garden is an application designed for buying and selling plants. Users can explore a variety of plants, list their own plants for sale, and purchase plants from other users.",
      imgUrl: garden,
      page: "https://drive.google.com/drive/folders/1A7buof3m9YP9aEG-vjVvHUtNAZ3X__Il",
      code: "",
      company: "",
    },
    {
      title: "Foodo",
      description:
        "Foodo is an innovative application designed to streamline the process of buying fast food. Users can explore a wide range of fast food options from various vendors, place orders quickly",
      imgUrl: foodo,
      page: "https://drive.google.com/drive/folders/1A7buof3m9YP9aEG-vjVvHUtNAZ3X__Il",
      code: "",
      company: "",
    },
    {
      title: "Luxury Home",
      description:
        "Luxury Home is a premier application dedicated to buying high-quality bathroom fixtures, tables, and a wide array of home furnishings. Users can browse an extensive selection of luxury home products",
      imgUrl: Home,
      page: "https://drive.google.com/drive/folders/1A7buof3m9YP9aEG-vjVvHUtNAZ3X__Il",
      code: "",
      company: "",
    },
    {
      title: "E-Smile System",
      description:
        "E-Smile System is a comprehensive platform designed for dental professionals and their patients. It allows dentists to manage appointments efficiently, maintain detailed patient records, and streamline their practice operations.",
      imgUrl: esmile,
      page: "",
      code: "",
      company: "E-Smile",
    },
  ];

  const projects2 = [
    {
      title: "Sela Project",
      description:
        "A wave project for the National Union of Syrian Students. I had a role in completing a number of tasks for this huge project by Odoo16 technology.",
      imgUrl: Sela,
      page: "https://selanuss.org/",
      code: "",
      company: "AL Tanmya",
    },
    {
      title: "Al-Fateh Club Project",
      description:
        "A wave project for Al-Fateh Club to manage all financial and accounting operations, display players, book tickets, and many more functionalities using Odoo 16 technology.",
      imgUrl: fatehclub,
      page: "https://fatehclub.com/en",
      code: "",
      company: "AL Tanmya",
    },
    {
      title: "Modern Architecture Project",
      description:
        "A special system developed for the Jumpsenborg Company. I played a key role in implementing various tasks, including organizing financial operations and addressing regulatory matters using Odoo 16 technology.",
      imgUrl: Modern,
      page: "",
      code: "",
      company: "AL Tanmya",
    },
  ];

  const projects3 = [
    {
      title: "E-commerce Project",
      description: "React js : Training project",
      imgUrl: eco1image,
      page: "https://mayarja.github.io/E-commerce/",
      code: "https://github.com/mayarja/E-commerce/tree/master",
    },
    {
      title: "Hotels Project",
      description: "React js : Training project",
      imgUrl: hotelsimage,
      page: "https://mayarja.github.io/Hotels/",
      code: "https://github.com/mayarja/Hotels/tree/master",
    },
    {
      title: "Social Project",
      description: "React js : Training project",
      imgUrl: socialimage,
      page: "https://mayarja.github.io/Social/",
      code: "https://github.com/mayarja/Social/tree/master",
    },
    {
      title: "E-commerce Project",
      description: "React js : Training project",
      imgUrl: kitchenimage,
      page: "https://mayarja.github.io/milano-react/",
      code: "https://github.com/mayarja/milano-react/tree/master",
    },
    {
      title: "Milion Project",
      description: "React js : Training project",
      imgUrl: milionimage,
      page: "https://mayarja.github.io/Milion/",
      code: "https://github.com/mayarja/Milion/tree/master",
    },
    {
      title: "Weather Project",
      description: "React js : Training project",
      imgUrl: weatherimage,
      page: "https://mayarja.github.io/Weather/",
      code: "https://github.com/mayarja/Weather/tree/master",
    },
    {
      title: "Blogs Project",
      description: "React js : Training project",
      imgUrl: blog,
      page: "https://mayarja.github.io/Blogs/",
      code: "https://github.com/mayarja/Blogs",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some of my UI/UX projects, which I have worked on
                    with great care and attention to detail. According to my
                    clients, my work is of high quality and meets their
                    expectations.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={"animate__animated animate__slideInUp"}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <Project key={index} {...project} />;
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
      <img className="background-image-right" src={colorSharp2} alt="..."></img>
    </section>
  );
}

export default Projects;
