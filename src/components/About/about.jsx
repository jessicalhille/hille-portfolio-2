import "./about.css";
import Me from "../../images/me.JPG";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={Me} alt="Jessica Hille smiling" className="about-image" />
                </div>
            </div>

            <div className="about-right">
                <h1 className="about-title">about me</h1>
                <p className="about-subtitle">
                    Hello world! My name is Jessica Hille and I'm currently a teacher in the DFW area.
                    I have spent almost my entire life immersed in the world of fine arts, and I am absolutely thrilled 
                    to bring my passion and unique perspective into the world of web development and design. 
                    I am a current student in the Southern Methodist University’s Coding Bootcamp, where I will
                    earn my Full-Stack Web Development Certificate in early April 2022. I also have 
                    a Bachelors in Music Education from the University of Oklahoma.
                </p>
                <p className="about-description">
                    I cannot wait to make the leap and continue refining my skills. If you’re interested in working together, you can contact me below!
                </p>

                <h2 className="skills">skills</h2>
                <div className="skills-list">
                    <div className="skills-button">
                        <i className="fa-brands fa-html5 fa-4x" title="HTML5"></i>
                        <p>HTML5</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-brands fa-css3-alt fa-4x" title="CSS"></i>
                        <p>CSS</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-brands fa-js fa-4x" title="JavaScript"></i>
                        <p>JavaScript</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-brands fa-git-alt fa-4x" title="Git"></i>
                        <p>Git</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-solid fa-code fa-4x" title="APIs"></i>
                        <p>Rest APIs</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-brands fa-node fa-4x" title="Node.js"></i>
                        <p>Node.js</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-solid fa-list-check fa-4x" title="Jest"></i>
                        <p>Jest</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-solid fa-compress fa-4x" title="Express.js"></i>
                        <p>Express</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-solid fa-database fa-4x" title="SQL"></i>
                        <p>SQL</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-brands fa-envira fa-4x" title="NoSQL"></i>
                        <p>NoSQL</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-brands fa-react fa-4x" title="React"></i>
                        <p>React</p>
                    </div>
                    <div className="skills-button">
                        <i className="fa-brands fa-react fa-4x" title="React"></i>
                        <p>React</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;