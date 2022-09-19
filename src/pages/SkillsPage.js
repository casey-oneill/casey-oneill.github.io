import { Component } from "react";
import SkillCard from "../components/SkillCard";

class SkillsPage extends Component {

	skills = () => {
		var skills = [];
		this.props.skills.forEach((e) => {
			skills.push(
				<div className="col-12 col-md-4 mb-5">
					<SkillCard {...e} />
				</div>
			);
		});
		return skills;
	}

	render() {
		return (
			<section id="skills" className="bg-light py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 mb-5">
							<h1 className="text-center">Skills</h1>
						</div>
						<div className="col-12">
							<div className="row">
								{this.skills()}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SkillsPage;
