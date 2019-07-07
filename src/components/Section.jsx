import React, { Component } from "react";
import propTypes from "prop-types";
import "../style/style.css";

//Component to render the section
class Section extends Component {
  render() {
    const { isActive, caption, handleActive, icon, detail } = this.props.prop;
    return (
      <div>
        <div
          className={isActive ? "section active" : "section"}
          onClick={() => handleActive(caption)}
        >
          <div className="flexBox">
            <i className="material-icons">{icon}</i>
            <div className="caption">{caption}</div>
          </div>
        </div>
        {/* Checks if the section is to be expanded*/}
        <div className={isActive ? "section_detail expand" : "section_detail"}>
          {detail}
        </div>
      </div>
    );
  }
}
//Validating prop-types of the object passed as prop
Section.propTypes = {
  prop: propTypes.shape({
    isActive: propTypes.bool.isRequired,
    caption: propTypes.string.isRequired,
    handleActive: propTypes.func.isRequired,
    icon: propTypes.string.isRequired,
    detail: propTypes.string.isRequired
  }).isRequired
};

export default Section;
