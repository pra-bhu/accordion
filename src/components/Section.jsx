import React, { Component } from "react";
import propTypes from "prop-types";
import "../style/style.css";

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
				<div className={isActive ? "section_detail expand" : "section_detail"}>
					{detail}
				</div>
			</div>
		);
	}
}

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
