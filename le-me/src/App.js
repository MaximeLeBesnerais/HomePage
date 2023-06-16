import React, { useState, useRef } from "react";
import "./App.css";
import c_logo from "./assets/C-logo.png";
import cpp_logo from "./assets/cpp-logo.png";
import python_logo from "./assets/python-logo.png";
import golang_logo from "./assets/golang_logo.png";
import js_logo from "./assets/js-logo.png";
import react_logo from "./assets/react-logo.png";
import node_logo from "./assets/node-logo.png";
import docker_logo from "./assets/docker-logo.png";
import git_logo from "./assets/git-logo.png";
import haskell_logo from "./assets/haskell_logo.png";
import kotlin_logo from "./assets/Kotlin-logo.png";
import github_logo from "./assets/github.png";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const contentRef = useRef(null);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const sectionRef = document.getElementById(section);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
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
          tabIndex="0"
        >
          <h2>Education</h2>
          <div className="education-container">
            <div className="education-card">
              <h3>EPITECH - Lyon</h3>
              <p>Expert in Information Technology</p>
              <p>2022-2026</p>
            </div>
            <div className="education-card">
              <h3>ESQESE - Lyon</h3>
              <p>Licence 1 - Bachelor Science of Numerical Systems</p>
              <p>2021-2022</p>
            </div>
            <div className="education-card">
              <h3>Université Claude Bernard Lyon 1 - Oullins</h3>
              <p>Medical studies</p>
              <p>2019-2021</p>
            </div>
            <div className="education-card">
              <h3>Institution Saint Joseph - Tassin-la-Demi-Lune</h3>
              <p>Bac S (A-levels)</p>
              <p>2012-2019</p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`projects section1 ${
            activeSection === "projects" ? "active" : ""
          }`}
          tabIndex="0"
        >
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-pill">
              <h3>
                <a
                  href="https://github.com/MaximeLeBesnerais/giti_super"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITI - Conventional Commits Tool
                </a>
              </h3>
              <p>Explore python capabilities through a CLI tool</p>
            </div>
            <div className="project-pill">
              <a
                href="https://github.com/MaximeLeBesnerais/sharp_todo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Sharp Todo - Todo list on a dotnet core API</h3>
              </a>
              <p>Realize a todo list with a dotnet core API and a python GUI</p>
            </div>
            <div className="project-pill">
              <h3>My website - This website</h3>
              <p>
                Realize a website with ReactJS on a VPS with Apache2 - Good way
                to learn ReactJS & hosting a website
              </p>
            </div>
          </div>
          <div className="project-pill large">
            <h3>Upcoming projects</h3>
            <p>Graphical adventure game in C++ (or C)</p>
            <p>Mobile App to control my VPS and update my website</p>
            <p>
              API development on my VPS with authentication system and user
              management
            </p>
            <p>Twitter-like website (language to be determined)</p>
            <p>Small ecommerce website (language to be determined)</p>
          </div>
        </section>

        <section id="skills" className="skills section2">
          <h2>Skills</h2>
          <div className="river-container">
            <div className="language-icon-container">
              <div className="language-icon" data-language="Python">
                <img src={python_logo} alt="Python" />
                <div className="tooltip">
                  <p>
                    Python
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="C">
                <img src={c_logo} alt="C" />
                <div className="tooltip">
                  <p>
                    C
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="C++">
                <img src={cpp_logo} alt="C++" />
                <div className="tooltip">
                  <p>
                    C++
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="Golang">
                <img src={golang_logo} alt="Golang" />
                <div className="tooltip">
                  <p>
                    Go
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="JavaScript">
                <img src={js_logo} alt="JavaScript" />
                <div className="tooltip">
                  <p>
                    JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="React">
                <img src={react_logo} alt="React" />
                <div className="tooltip">
                  <p>
                    React
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="Node.js">
                <img src={node_logo} alt="Node.js" />
                <div className="tooltip">
                  <p>
                    Node.js
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="Docker">
                <img src={docker_logo} alt="Docker" />
                <div className="tooltip">
                  <p>
                    Docker
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="GitHub">
                <img src={github_logo} alt="GitHub" />
                <div className="tooltip">
                  <p>
                    GitHub
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="Git">
                <img src={git_logo} alt="Git" />
                <div className="tooltip">
                  <p>
                    Git
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="Haskell">
                <img src={haskell_logo} alt="Haskell" />
                <div className="tooltip">
                  <p>
                    Haskell
                  </p>
                </div>
              </div>
            </div>
            <div className="language-icon-container">
              <div className="language-icon" data-language="Kotlin">
                <img src={kotlin_logo} alt="Kotlin" />
                <div className="tooltip">
                  <p>
                    Kotlin
                  </p>
                </div>
              </div>
            </div>
          </div>
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
