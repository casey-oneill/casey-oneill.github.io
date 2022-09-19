import { Component } from "react";
import ContactCard from "../components/ContactCard";

class ContactsPage extends Component {

	contacts = () => {
		var contacts = [];
		this.props.contacts.forEach((e) => {
			contacts.push(
				<div className="col-12 mb-5">
					<ContactCard {...e} />
				</div>
			);
		});
		return contacts;
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-3 mb-4">
						<div className="row">
							<div className="col">
								<h1>Contact</h1>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-9">
						<div className="row">
							{this.contacts()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactsPage;
