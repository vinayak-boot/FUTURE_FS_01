import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container" id="home">
            <div className="hero-content">
                <div className="hero-text-section">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Vinayak Soni</span>
                    </h1>
                    <p className="hero-subtitle">Frontend Developer</p>
                    <p className="hero-desc">
                        Building immersive digital experiences with modern web technologies.
                        Passionate about creating dynamic, responsive, and user-centric applications.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">
                            <i className="ri-eye-line"></i> View Work
                        </a>
                        <a href="/resume.pdf" className="btn btn-outline" download="Vinayak_Soni_Resume.pdf">
                            <i className="ri-download-cloud-line"></i> Download Resume
                        </a>
                    </div>
                    <div className="social-icons-hero">
                        <a href="https://www.linkedin.com/in/vinayak-soni-593273397/" target="_blank" rel="noreferrer"><i className="ri-linkedin-fill"></i></a>
                        <a href="https://github.com/vinayak-boot" target="_blank" rel="noreferrer"><i className="ri-github-fill"></i></a>
                        <a href="mailto:vinayaksoni446@gmail.com"><i className="ri-mail-fill"></i></a>
                    </div>
                </div>


            </div>
            <div className="hero-visual">
                <div className="glowing-circle"></div>
            </div>
        </div>
    );
};

export default Hero;
