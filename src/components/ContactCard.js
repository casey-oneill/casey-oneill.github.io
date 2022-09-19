import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactCard extends Component {

	render() {
		const { link, icon, title, description } = this.props;
		return (
			<div className="card shadow-sm">
				<div className="card-body">
					<h5><a href={link} className="plain-link"><FontAwesomeIcon icon={icon} /> {title}</a></h5>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

export default ContactCard;
