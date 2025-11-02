import React, { useState } from 'react';
import './About.css';

const About: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const workExperience = [
    {
      company: 'IBM Software',
      role: 'Full-stack Engineer API-Connect',
      location: 'Dublin, Ireland',
      period: 'Jan 2025 - Present',
      achievements: [
        'Engineered VS Code plugin integrations with IBM watsonX Orchestrate, implementing advanced agentic AI workflows and generative AI capabilities for enhanced developer productivity within API-Connect',
        'Built scalable Model Context Protocol servers with custom tool and resource registrations, extending AI system capabilities through robust microservices architecture',
        'Reduced LLM response latency from over 10 minutes to under 2 minutes by implementing input payload fragmentation and asynchronous parallel processing',
        'Delivered comprehensive product features using NodeJS, React, and Python, orchestrating seamless integration between AI-powered backends and responsive frontend interfaces',
        'Implemented CI/CD pipelines with Jenkins, Docker containerization, and Kubernetes manifests, ensuring reliable deployment workflows for AI-integrated applications',
        'Developed two watsonX-powered solutions - drone-assisted roadside vehicle assistance platform and AI agent framework for autonomous developer team management'
      ]
    },
    {
      company: 'Irish Water',
      role: 'Graduate Solutions Architect',
      location: 'Dublin, Ireland',
      period: 'Sep 2023 - Jan 2025',
      achievements: [
        'Collaborated with Design Agenda team to review design submissions and make critical decisions on ratifying designs based on technical feasibility and alignment with business objectives',
        'Provided guidance on best practices and architectural patterns to development teams, fostering the creation of scalable and maintainable systems',
        'Developed and maintained comprehensive architectural documentation and standards'
      ]
    },
    {
      company: 'Prestin Technology',
      role: 'Software Developer (Part-Time)',
      location: 'Dublin, Ireland',
      period: 'Jan 2023 - Aug 2023',
      achievements: [
        'Orchestrated scalable microservices architecture using Spring Boot in Java, navigating complex fintech requirements to ensure robustness and efficiency',
        'Implemented unit tests for core functions and end-to-end integration tests using Playwright to ensure application reliability and seamless user experience',
        'Integrated messaging queues to foster seamless communication among microservices, enhancing system resilience through asynchronous interactions',
        'Demonstrated adeptness in troubleshooting intricate technical challenges, ensuring product stability and refining problem-solving acumen'
      ]
    },
    {
      company: 'PayU-Wibmo',
      role: 'Software Developer 1',
      location: 'Bengaluru, India',
      period: 'Aug 2020 - Sep 2022',
      achievements: [
        'Engineered the \'Trident\' fraud risk engine using Spring framework and servlets, effectively safeguarding against fraud through advanced detection techniques',
        'Orchestrated AWS services to establish a robust and scalable architecture, ensuring reliability in processing high-demand scenarios',
        'Leveraged Docker to enhance deployment consistency and streamline development, contributing to efficient and reliable software releases',
        'Primary engineer for an Auth-app system, integrating Spring Boot and Google FCM for push notifications, and collaborated with cross-functional teams for timely contributions'
      ]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="about">
      <div className="about-header-container">
        <div className="about-header">
          <h2 className="section-number">01.</h2>
          <h3 className="section-title">About Me</h3>
        </div>
      </div>
        
      <div className="about-content">
        <div className="about-text">
          <div className="about-description">
            <p>
              Hello! I'm Shreyas, a software engineer based in Dublin, Ireland.
            </p>
            <p>
              I like doing anything tech - from building <span className="highlight">apps</span>, 
              <span className="highlight"> data pipelines</span>, <span className="highlight">AI agents</span>, 
              <span className="highlight"> Web Apps</span>, <span className="highlight">Frameworks</span> or 
              <span className="highlight"> anything</span> that challenges me and allows me to create 
              innovative solutions.
            </p>
            <p>
              I'm passionate about solving complex problems and building scalable systems. 
              Whether it's developing full-stack applications, working with AI and machine learning, 
              or architecting cloud infrastructure, I love diving deep into technology and 
              creating solutions that make an impact.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open source projects, or learning about the latest trends in software engineering 
              and AI.
            </p>
          </div>
        </div>
        
        <div className="about-image">
          <div className="image-wrapper">
            <div className="image-border"></div>
            <div className="image-container">
              <img src="/DP.jpg" alt="Shreyas Raviprakash" className="profile-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="experience-section">
          <h4 className="experience-title">Where I've Worked</h4>
          <div className="experience-timeline">
            {workExperience.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div key={index} className={`experience-item ${isExpanded ? 'expanded' : ''}`}>
                  <div 
                    className="experience-header"
                    onClick={() => toggleExpanded(index)}
                  >
                    <div className="experience-role">
                      <span className="experience-company">{exp.company}</span>
                      <span className="experience-position">{exp.role}</span>
                    </div>
                    <div className="experience-header-right">
                      <div className="experience-meta">
                        <span className="experience-location">{exp.location}</span>
                        <span className="experience-period">{exp.period}</span>
                      </div>
                      <div className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 12l4-4-4-4"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`experience-content ${isExpanded ? 'expanded' : ''}`}>
                    <ul className="experience-achievements">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;