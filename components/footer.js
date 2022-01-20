class Footer extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = (`
			<footer class="footer bg-primary py-3 mt-auto">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12 text-center">
							&copy <a href="index.html">Casey O'Neill</a> 2021
						</div>
					</div>
				</div>
			</footer>
		`);
	}
}

customElements.define('footer-component', Footer);
