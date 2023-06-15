import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState(""); // Track the active section
  const contentRef = useRef(null); // Reference to the content container

  const scrollToSection = (section) => {
    setActiveSection(section); // Set the active section
    const sectionRef = document.getElementById(section); // Get the DOM element of the section
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="name">Maxime Le Besnerais</h2>
        <ul>
          <li onClick={() => scrollToSection("education")}>Education</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("networks")}>Networks</li>
        </ul>
      </nav>
      <div className="content" ref={contentRef}>
        <section
          id="education"
          className={`education section1 ${
            activeSection === "education" ? "active" : ""
          }`}
          tabIndex="0" // Add this attribute
        >
          <h2>Education</h2>
          <ul className="education-list">
            <li>
              <h3>EPITECH - Lyon</h3>
              <p>Expert in Information Technology</p>
              <p>2022-2026</p>
            </li>
            <li>
              <h3>ESQESE - Lyon</h3>
              <p>Licence 1 - Bachelor Science of Numerical Systems</p>
              <p>2021-2022</p>
            </li>
            <li>
              <h3>Université Claude Bernard Lyon 1 - Oullins</h3>
              <p>Medical studies</p>
              <p>2019-2021</p>
            </li>
            <li>
              <h3>Institution Saint Joseph - Tassin-la-Demi-Lune</h3>
              <p>Bac S (A-levels)</p>
              <p>2012-2019</p>
            </li>
          </ul>
        </section>

        <section
          id="projects"
          className={`projects section1 ${
            activeSection === "projects" ? "active" : ""
          }`}
          tabIndex="0"
        >
          <h2>Projects</h2>
          <ul className="project-list">
            <li>
              <div className="project-pill">
                <h3>GITI - Conventional Commits Tool</h3>
                <p>Explore python capabilities through a CLI tool</p>
              </div>
            </li>
            <li>
              <div className="project-pill">
                <h3>Sharp Todo - Todo list on a dotnet core API</h3>
                <p>
                  Realize a todo list with a dotnet core API and a python GUI
                </p>
              </div>
            </li>
            <li>
              <div className="project-pill">
                <h3>My website - This website</h3>
                <p>
                  Realize a website with ReactJS on a VPS with Apache2 - Good
                  way to learn ReactJS & hosting a website
                </p>
              </div>
            </li>
            <li>
              <div className="project-pill large">
                <h3>Upcoming projects:</h3>
                <p>- Textual adventure game in Kotlin (or Java)</p>
                <p>- Graphical adventure game in C++ (or C)</p>
                <p>- Mobile App to control my VPS and update my website</p>
                <p>
                  - API development on my VPS with authentication system and
                  user management
                </p>
                <p>- Twitter-like website (language to be determined)</p>
                <p>- Small ecommerce website (language to be determined)</p>
              </div>
            </li>
          </ul>
        </section>

        <section
          id="skills"
          className={`skills section2 ${
            activeSection === "skills" ? "active" : ""
          }`}
          tabIndex="0" // Add this attribute
        >
          <h2>Skills</h2>
          {/* Add your skills content here */}
        </section>
        <section
          id="networks"
          className={`networks section2 ${
            activeSection === "networks" ? "active" : ""
          }`}
          tabIndex="0" // Add this attribute
        >
          <h2>Networks</h2>
          {/* Add your networks and phone number here */}
        </section>
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} Maxime Le Besnerais</p>
      </footer>
    </div>
  );
}

export default App;
