import { Component } from "react";
import ProjectCard from "../components/ProjectCard";

class ProjectsPage extends Component {

	projects = () => {
		var projects = [];
		this.props.projects.forEach((e) => {
			projects.push(
				<div className="col-12 mb-5">
					<div className="row">
						<div className="col-8">
							<ProjectCard {...e} />
						</div>
					</div>
				</div>
			);
		});
		return projects;
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-xl-4 mb-5">
						<div className="row">
							<div className="col">
								<h1>Projects</h1>
							</div>
						</div>
					</div>
					<div className="col-12 col-xl-8">
						<div className="row">
							{this.projects()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectsPage;
