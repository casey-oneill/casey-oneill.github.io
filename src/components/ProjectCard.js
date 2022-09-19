import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

class ProjectCard extends Component {

	render() {
		const { title, description, authors, codeLink, demoLink } = this.props;
		return (
			<div>
				<h5>{title}</h5>
				<p>{description}</p>
				<p className="text-muted">{authors}</p>
				{codeLink == null ? null : <a href={codeLink} className="btn btn-outline-primary m-1"><FontAwesomeIcon icon={brands("github")} /> Code</a>}
				{demoLink == null ? null : <a href={codeLink} className="btn btn-outline-primary m-1"><FontAwesomeIcon icon={solid("play-circle")} /> Live Demo</a>}
			</div>
		);
	}
}

export default ProjectCard;
