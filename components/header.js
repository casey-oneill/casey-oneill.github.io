class Header extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = (`
			<nav class="navbar navbar-expand-md navbar-dark bg-primary shadow">
				<div class="container">
					<a class="navbar-brand" href="index.html">Casey O'Neill</a>
					<div class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item">
								<a id="nav-link-projects" class="nav-link" href="projects.html">Projects</a>
							</li>
							<li class="nav-item">
								<a id="nav-link-about" class="nav-link" href="about.html">About</a>
							</li>
							<li class="nav-item">
								<a id="nav-link-contact" class="nav-link" href="contact.html">Contact</a>
							</li>
						</ul>
					</div>
					<div class="d-flex">
						<a class="me-2" href="https://www.linkedin.com/in/caseyoneill/" target="_blank"><h4 class="my-0"><i class="fab fa-linkedin"></i></h4></a>
						<a href="https://github.com/casey-oneill/" target="_blank"><h4 class="my-0"><i class="fab fa-github-square"></i></h4></a>
					</div>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
		`);

		if (window.location.href.includes("about")) {
			document.getElementById("nav-link-about").classList.add("active");
		}

		if (window.location.href.includes("contact")) {
			document.getElementById("nav-link-contact").classList.add("active");
		}

		if (window.location.href.includes("projects")) {
			document.getElementById("nav-link-projects").classList.add("active");
		}
	}
}

customElements.define('header-component', Header);
