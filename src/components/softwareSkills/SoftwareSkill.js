import React from "react";
import "./SoftwareSkill.css";

class SoftwareSkill extends React.Component {
  state = { activeSkill: null };

  getProficiency(skillName) {
    const total = skillName
      .split("")
      .reduce((sum, character) => sum + character.charCodeAt(0), 0);
    return 70 + (total % 31);
  }

  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {this.props.logos.map((logo) => {
              const proficiency = this.getProficiency(logo.skillName);
              const isActive = this.state.activeSkill === logo.skillName;
              return (
                <li
                  className={`software-skill-inline${isActive ? " skill-active" : ""}`}
                  key={logo.skillName}
                  onMouseEnter={() => this.setState({ activeSkill: logo.skillName })}
                  onMouseLeave={() => this.setState({ activeSkill: null })}
                  onFocus={() => this.setState({ activeSkill: logo.skillName })}
                  onBlur={() => this.setState({ activeSkill: null })}
                  tabIndex="0"
                >
                  <div className="skill-icon">
                    {logo.fontAwesomeClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                    {!logo.fontAwesomeClassname && logo.imageSrc && (
                      <img
                        className="skill-image"
                        style={logo.style}
                        src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                        alt={logo.skillName}
                      />
                    )}
                  </div>
                  <div className="skill-proficiency-panel">
                    <div className="skill-proficiency-name">{logo.skillName} - {proficiency}%</div>
                    <div className="skill-proficiency-track">
                      <div
                        className="skill-proficiency-value"
                        style={{
                          width: isActive ? `${proficiency}%` : "0%",
                          backgroundColor: logo.style?.color || "#6C63FF",
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
