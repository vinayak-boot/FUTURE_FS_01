import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <h2 className="section-title">
                <i className="ri-user-star-line"></i> About & Resume
            </h2>

            <div className="resume-content">
                <div className="resume-section glass-card">
                    <h3><i className="ri-profile-line"></i> Professional Summary</h3>
                    <p>
                        Enthusiastic MERN Stack Fresher with a Bachelor's degree in Computer Applications and strong skills in Technical and Interpersonal behaviour with HTML/CSS, JS, MERN, Python (OOPS), Adobe Premiere Pro, Figma, Github, Google Antigravity, Communication, Problem-Solving, and Customer Interaction. Eager to contribute enthusiasm, adaptability, and a fresh perspective to a dynamic team at your reputed organization.
                    </p>
                </div>

                <div className="resume-grid">
                    <div className="resume-card glass-card">
                        <h3><i className="ri-graduation-cap-line"></i> Education</h3>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>BCA</h4>
                            <p>IES University</p>
                            <span className="date">2025 | CGPA: 7.26</span>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>DCA</h4>
                            <p>Makhanlal Chaturvedi University of Journalism and Mass Communication</p>
                            <span className="date">2024 | 66.5%</span>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>High School Diploma</h4>
                            <p>Mother Teresa Sr. Sec Co-Ed School</p>
                            <span className="date">2022</span>
                        </div>
                    </div>

                    <div className="resume-card glass-card">
                        <h3><i className="ri-briefcase-4-line"></i> Experience</h3>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>Computer Faculty</h4>
                            <p>Leelavati International School, Bhopal</p>
                            <span className="date">2025</span>
                            <p className="exp-desc">
                                • Skilled at working independently and collaboratively in a team environment.<br />
                                • Worked well in a team setting, providing support and guidance.<br />
                                • Managed time efficiency in order to complete all tasks within the deadline.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="skills-section glass-card">
                    <h3><i className="ri-code-box-line"></i> Technical Skills</h3>
                    <div className="skills-grid">
                        <span className="skill-tag"><i className="ri-html5-fill"></i> HTML/CSS</span>
                        <span className="skill-tag"><i className="ri-javascript-fill"></i> JavaScript</span>
                        <span className="skill-tag"><i className="ri-reactjs-fill"></i> MERN Stack</span>
                        <span className="skill-tag"><i className="ri-terminal-box-fill"></i> Python (OOPS)</span>
                        <span className="skill-tag"><i className="ri-google-fill"></i> Google Antigravity</span>
                        <span className="skill-tag"><i className="ri-robot-fill"></i> Prompt Engineering</span>
                        <span className="skill-tag"><i className="ri-brush-fill"></i> Canva</span>
                        <span className="skill-tag"><i className="ri-image-edit-fill"></i> Adobe Express</span>
                        <span className="skill-tag"><i className="ri-video-fill"></i> Adobe Premiere Pro</span>
                        <span className="skill-tag"><i className="ri-pen-nib-fill"></i> Figma</span>
                        <span className="skill-tag"><i className="ri-github-fill"></i> GitHub</span>
                    </div>
                </div>

                <div className="skills-section glass-card">
                    <h3><i className="ri-award-line"></i> Certifications</h3>
                    <div className="skills-grid">
                        <span className="skill-tag">Body Language: Key to Professional Success (NPTEL)</span>
                        <span className="skill-tag">Front End Development (Simplilearn)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
