import PropTypes from "prop-types";

import file from "../assets/Headshot_Placeholder.jpg";

// SVG file imports
import htmlSvg from "../assets/html.svg";
import cssSvg from "../assets/css3.svg";
import jsSvg from "../assets/javascript.svg";
import javaSvg from "../assets/java.svg";
import pythonSvg from "../assets/python.svg";
import mongoSvg from "../assets/mongodb.svg";

// Picture imports personal project
import capybaraPic from "../assets/capybara.jpg";
import shufflePic from "../assets/dancing.jpg";
import iphonePic from "../assets/iphone.jpg";
function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      <FeaturedProjects />
    </>
  );
}

//------------------------
// Hero Section
//------------------------
function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-h1">Hi, I'm Adam Nguyen!</h1>
          <p className="hero-paragraph">
            A Computer Science Sophomore at Virginia Tech, with hands-on
            experience in JavaScript, HTML, CSS and web development frameworks.
            I&aposve built multiple web projects, including my portfolio and a
            capybara-themed social media site. Beyond coding, I spend time
            practicing new dance moves for my Shuffling Club.
          </p>
        </div>
        <img
          className="hero-img"
          src={file}
          alt="Adam Nguyen, the developer of this website"
        />
      </div>
    </section>
  );
}
//------------------------
// Skills Section
//------------------------
// Contains my skills from my resume
function Skills() {
  return (
    <section className="section-skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <ul className="skill-list">
          <li>
            <img src={jsSvg} alt="javascript SVG logo" />
            Javascript
          </li>
          <li>
            <img src={htmlSvg} alt="html SVG logo" />
            HTML
          </li>
          <li>
            <img src={cssSvg} alt="css SVG logo" />
            CSS
          </li>
          <li>
            <img src={javaSvg} alt="java SVG logo" />
            Java
          </li>
          <li>
            <img src={pythonSvg} alt="python SVG logo" />
            Python
          </li>
          <li>
            <img src={mongoSvg} alt="mongo SVG logo" />
            MongoDB
          </li>
        </ul>
      </div>
    </section>
  );
}
//------------------------
// Featured Section
//------------------------

// Showcases the github projects I'm working on
function FeaturedProjects() {
  return (
    <section className="section-projects">
      <div className="projects-container">
        <h2 className="project-h2">Personal projects</h2>
        <div className="card-container">
          <a href="https://github.com/Adanato/capybara-space-socialmedia">
            <ProjectCard
              src={capybaraPic}
              alt="picture of capybaras by the river"
              title="CapybaraSpace.com"
              description="Using MERN Stack, this project aims to create a interactive online community
            built on the love of Capybaras. Taking inspiration from reddit. Project is currently going underway."
            />
          </a>
          <a href="{}">
            <ProjectCard
              src={shufflePic}
              alt="picture of someone shuffling"
              title="ShuffleVT.com"
              description="Bringing my passion for shuffling to life, a webpage featuring 
          dance videos and a call-to-action that motivates fellow hokies to join the club. Hosted on Digital ocean"
            />
          </a>
          <a href="https://github.com/Adanato/ShuffleTrainerIOS">
            <ProjectCard
              src={iphonePic}
              alt="picture of a project"
              title="Shuffle Trainer IOS App"
              description="This app combats reduced dance creativity at high BPM by shuffling 
            a deck of suggested dance moves, helping to keep freestyle dances fresh and varied."
            />
          </a>
        </div>
      </div>
    </section>
  );
}
ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
function ProjectCard({ title, description, src, alt }) {
  return (
    <div className="project-card">
      <ProjectImage src={src} alt={alt} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M184 112l144 144-144 144"
        />
      </svg>
    </div>
  );
}

ProjectImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
function ProjectImage({ src, alt }) {
  return (
    <div className="image-container">
      <img className="project-img" src={src} alt={alt} />
      <p className="hover-text">Check out on GitHub</p>
    </div>
  );
}

//------------------------
// Experience Section
//------------------------

export default HomePage;
