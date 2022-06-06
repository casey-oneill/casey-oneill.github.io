import './App.css';
import portrait from './images/portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Element } from 'react-scroll';
import { data } from './data/data';

function skills() {
	var skills = [];
	data.skills.forEach((e) => {
		skills.push(
			<div className="col-12 col-md-4 mb-5">
				<div className="text-center mb-2"><FontAwesomeIcon icon={e.icon} size="3x" /></div>
				<h3 className="text-center">{e.title}</h3>
				<p className="text-center">{e.description}</p>
			</div>
		);
	});
	return skills;
}

function experience() {
	var experience = [];
	data.experience.forEach((e) => {
		var dates = []
		e.dates.forEach((d) => {
			dates.push(
				<p className="m-0">{d}</p>
			);
		});

		experience.push(
			<div className="col-12 mb-5">
				<div className="card shadow-sm">
					<div className="card-body">
						<h5 className="text-muted">{e.title}</h5>
						<h5><a href={e.link}>{e.company}</a></h5>
						<p>{dates}</p>
						<p>{e.description}</p>
					</div>
				</div>
			</div>
		);
	});
	return experience;
}

function projects() {
	var projects = [];
	data.projects.forEach((e) => {
		projects.push(
			<div className="col-12 mb-5">
				<div className="row">
					<div className="col-8">
						<h5>{e.title}</h5>
						<p>{e.description}</p>
						<p className="text-muted">{e.authors}</p>
						{e.codeLink == null ? null : <a href={e.codeLink} className="btn btn-outline-primary m-1"><FontAwesomeIcon icon={brands("github")} /> Code</a>}
						{e.demoLink == null ? null : <a href={e.codeLink} className="btn btn-outline-primary m-1"><FontAwesomeIcon icon={solid("play-circle")} /> Live Demo</a>}
					</div>
					{/* <div className="col-4">
						<img src="img/projects/roguelike-demo.gif" className="fit-image border" />
					</div> */}
				</div>
			</div>
		);
	});
	return projects;
}

function contacts() {
	var contacts = [];
	data.contacts.forEach((e) => {
		contacts.push(
			<div className="col-12 mb-5">
				<div className="card shadow-sm">
					<div className="card-body">
						<h5><a href={e.link} className="plain-link"><FontAwesomeIcon icon={e.icon} /> {e.title}</a></h5>
						<p>{e.description}</p>
					</div>
				</div>
			</div>
		);
	});
	return contacts;
}

function App() {
	return (
		<>
			{/* Biography */}
			<Element id="home" name="home" className="pt-5">
				<div className="container pb-5">
					<div className="row">
						<div className="col-12 col-md-5 mb-5">
							<div className="row justify-content-center">
								<div className="col-12">
									<img src={portrait} className="rounded-circle mx-auto d-block" alt="Casey O'Neill portait." />
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
										My interests lie in creating visually engaging interactive software.
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-6 mb-3">
									<h3>Interests</h3>
									<ul>
										<li>Human-Computer Interaction</li>
										<li>Web Application Development</li>
										<li>Responsive Design</li>
									</ul>
								</div>
								<div className="col-12 col-md-6 mb-3">
									<h3>Education</h3>
									<ul>
										<li>Bachelor of Computer Science<br /><small className="text-muted">University of New Brunswick (2023)</small></li>
										<li>Bachelor of Arts (Philosophy)<br /><small className="text-muted">University of New Brunswick (2023)</small></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Skills */}
				<section id="skills" className="bg-light py-5">
					<div className="container">
						<div className="row">
							<div className="col-12 mb-5">
								<h1 className="text-center">Skills</h1>
							</div>
							<div className="col-12">
								<div className="row">
									{skills()}
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* END Skills */}
			</Element>
			{/* END Biography */}


			{/* Experience */}
			<Element id="experience" name="experience" className="py-5">
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
								{experience()}
							</div>
						</div>
					</div>
				</div>
			</Element>
			{/* END Experience */}

			{/* Projects */}
			<Element id="projects" name="projects" className="bg-light py-5">
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
								{projects()}
							</div>
						</div>
					</div>
				</div>
			</Element>
			{/* END Projects */}

			{/* Contact */}
			<Element id="contact" name="contact" className="py-5">
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
								{contacts()}
							</div>
						</div>
					</div>
				</div>
			</Element>
			{/* END Contact */}
		</>
	);
}

export default App;
