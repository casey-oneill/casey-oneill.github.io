import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

class SkillCard extends Component {

	render() {
		const { title, description, icon } = this.props;
		return (
			<div>
				<div className="text-center mb-2"><FontAwesomeIcon icon={icon} size="3x" /></div>
				<h3 className="text-center">{title}</h3>
				<p className="text-center">{description}</p>
			</div>
		)
	}
}

export default SkillCard;
