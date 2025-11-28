import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Netflix Homepage Clone",
            description: "A responsive clone of the Netflix homepage using HTML and CSS. Features Flexbox layout, section-wise content design, footer grid layout, and is deployed on GitHub.",
            tech: ["HTML", "CSS", "Flexbox", "GitHub"],
            link: "https://vinayak-boot.github.io/Netflix-ui-clone/",
            github: "https://github.com/vinayak-boot",
            icon: "ri-movie-2-line"
        },
        {
            title: "Personal Portfolio",
            description: "This personal portfolio website built with the MERN stack, featuring a dark gradient theme, 3D interactive navbar, and email contact form.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            link: "#",
            github: "https://github.com/vinayak-boot",
            icon: "ri-profile-line"
        }
    ];

    return (
        <div className="projects-container">
            <h2 className="section-title">
                <i className="ri-code-s-slash-line"></i> My Projects
            </h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card-3d" key={index}>
                        <div className="card-content">
                            <div className="card-icon">
                                <i className={project.icon}></i>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.link} className="link-btn" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-external-link-line"></i> View
                                </a>
                                <a href={project.github} className="link-btn outline" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-github-line"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
