import portrait from '../img/portrait.jpg';
import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

class BiographyPage extends Component {

	render() {
		return (
			<div className="container pb-5" >
				<div className="row">
					<div className="col-12 col-md-5 mb-5">
						<div className="row justify-content-center">
							<div className="col-12">
								<img src={portrait} className="rounded-circle mx-auto d-block" alt="Portrait of Casey O'Neill." width={300} height={300} />
							</div>
						</div>
						<div className="row mt-3">
							<h3 className="text-center">Casey O'Neill</h3>
						</div>
						<div className="row mb-3">
							<h3 className="text-center"><small className="text-muted">BCS/BA Student</small></h3>
							<p className="text-center"><a href="https://www.unb.ca">University of New Brunswick</a></p>
						</div>
						<div className="row justify-content-center">
							<div className="col-2 text-center">
								<a href="mailto:casey.oneill@unb.ca"><FontAwesomeIcon icon={solid("envelope")} size="2x" /></a>
							</div>
							<div className="col-2 text-center">
								<a href="https://github.com/casey-oneill/"><FontAwesomeIcon icon={brands("github")} size="2x" /></a>
							</div>
							<div className="col-2 text-center">
								<a href="https://www.linkedin.com/in/caseyoneill/"><FontAwesomeIcon icon={brands("linkedin")} size="2x" /></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-7">
						<div className="row mb-3">
							<div className="col">
								<h1>Hi, I'm Casey!</h1>
								<p>
									I'm currently studying computer science and philosophy at the University of New Brunswick.
								</p>
								<p>
									I've completed four work terms through the UNB co-op program. I've worked as a web developer at Populus Global Solutions,
									Innovatia, and VeroSource Solutions. Outside of work, I'm a programming enthusiast and enjoy creating video games and completing
									coding challenges like the Advent of Code.
								</p>
								<p>
									I am interested in creating visually engaging, interactive software.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-md-6 mb-3">
								<h3>Interests</h3>
								<ul>
									<li>Human-Computer Interaction</li>
									<li>Human-Robot Interaction</li>
									<li>Web Application Development</li>
									<li>Responsive Design</li>
								</ul>
							</div>
							<div className="col-12 col-md-6 mb-3">
								<h3>Education</h3>
								<ul>
									<li>Bachelor of Computer Science<br /><small className="text-muted">University of New Brunswick (Anticipated, May 2023)</small></li>
									<li>Bachelor of Arts (Philosophy, Major)<br /><small className="text-muted">University of New Brunswick (Anticipated, May 2023)</small></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BiographyPage;
