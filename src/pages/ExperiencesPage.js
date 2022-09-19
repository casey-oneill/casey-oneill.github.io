import { Component } from "react";
import ExperienceCard from "../components/ExperienceCard";

class ExperiencesPage extends Component {

	experiences = () => {
		var experiences = [];
		this.props.experiences.forEach((e) => {
			experiences.push(
				<div className="col-12 mb-5">
					<ExperienceCard {...e} />
				</div>
			);
		});
		return experiences;
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-4 mb-5">
						<div className="row">
							<div className="col">
								<h1>Experience</h1>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-8">
						<div className="row">
							{this.experiences()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ExperiencesPage;
