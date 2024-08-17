import "./About.css";
import { assets } from "../../assets/assets";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>about me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={assets.profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Harsh Thakur, I'm from Uttarakhand, India. I recently
              completed my Master of Computer Applications (MCA) from Tula's
              Institute, Dehradun. With a strong foundation in programming
              languages like C, C++, and web technologies such as HTML, CSS,
              JavaScript, React and Redux. Currently, I am expanding my skill
              set by learning backend development.
            </p>
            <p>
              As a fresher, I am actively seeking job opportunities where I can
              contribute my knowledge and grow within a dynamic team. I am
              passionate about web development and committed to continuously
              learning and improving my craft.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>My SQl</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
