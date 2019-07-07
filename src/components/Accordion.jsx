import React, { Component } from "react";
import Section from "./Section";
import { connect } from "react-redux";
/* 
Component to create Collapsible Accordion.
 */
class Accordion extends Component {
  constructor(props) {
    super(props);
    this.handleActive = this.handleActive.bind(this);
    this.state = {
      sections: props.sections
    };
  }
  /* 
	Recieves Click event with the caption of the section
	Sets the section with the flag value and removes flag from
	previous sections.
 */
  handleActive(caption) {
    this.setState(prevState => ({
      sections: prevState.sections.map(prev => ({
        icon: prev.icon,
        caption: prev.caption,
        isActive: prev.caption === caption ? !prev.isActive : false,
        detail: prev.detail
      }))
    }));
  }
  render() {
    let key = 0;
    let sections = this.state.sections.map(curr => (
      <Section
        key={key++}
        prop={{
          icon: curr.icon,
          isActive: curr.isActive,
          caption: curr.caption,
          handleActive: this.handleActive,
          detail: curr.detail
        }}
      />
    ));
    return <div className="accordion">{sections}</div>;
  }
}

//Pulls the state from Redux-store and populates with the
//required list of sections.
const mapStateToProps = (state, ownProps) => ({
  sections: state.sections
});

export default connect(mapStateToProps)(Accordion);
