import { Component } from "react";

class ExperienceCard extends Component {

	formattedDates = () => {
		var dates = []
		this.props.dates.forEach((d) => {
			dates.push(
				<p className="m-0">{d}</p>
			);
		});
		return dates;
	}

	render() {
		const { title, link, company, description } = this.props;
		return (
			<div className="card shadow-sm">
				<div className="card-body">
					<h5>{title}</h5>
					<h5><a href={link}>{company}</a></h5>
					<p className="text-muted">{this.formattedDates()}</p>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

export default ExperienceCard;
