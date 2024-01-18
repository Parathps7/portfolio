import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Parath Safaya",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "safayaparath@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7889688181",
  },

];

const jobSummary =
  "Hello! I'm a fourth-year IT student at NIT Srinagar, passionate about software development, competitive coding, and chess. Proficient in data structures and algorithms, I have a solid grasp of computer network fundamentals, TCP/IP, OSI model, operating systems,database management system and object-oriented programming. Doubling as a full-stack developer, I thrive on bringing ideas to life across the tech spectrum. Beyond coding, I'm a movie buff, appreciating diverse storytelling. Eager to contribute my skills and enthusiasm to the dynamic world of software development, I'm excited for the challenges ahead!";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Aspiring Software Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
              <li>
              <span className="title">Linkedin</span>
              <span className="value"><a href="https://www.linkedin.com/in/parath-safaya-368a30200/"  >Parath Safaya</a></span>
              </li>
              <li>
              <span className="title">Codeforces</span>
              <span className="value"><a href="https://codeforces.com/profile/frouFrouEmpire"  >frouFrouEmpire</a></span>
              </li>
              <li>
              <span className="title">Codechef</span>
              <span className="value"><a href="https://www.codechef.com/users/parath_ps7"  >parath_ps7</a></span>
              </li>
              <li>
              <span className="title">LeetCode</span>
              <span className="value"><a href="https://leetcode.com/safayaparath/" >safayaparath</a></span>
              </li>
              <li>
              <span className="title">GFG</span>
              <span className="value"><a href="https://auth.geeksforgeeks.org/user/safayaparath/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"  >safayaparath</a></span>
              </li>
              <li>
              <span className="title">Github</span>
              <span className="value"><a href="https://github.com/Parathps7"  >Parathps7</a></span>
              </li>
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
