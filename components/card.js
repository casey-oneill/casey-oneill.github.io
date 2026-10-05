export default function (title, subtitle, text, href, link) {
  return `
    <div class="card border-0 w-100">
      <div class="card-body">
        <h6 class="card-subtitle mb-2">${title}</h6>
        <p class="card-text mb-2">${subtitle}</p>
        <p class="card-text mb-2">${text}</p>
        <a href="${href}" class="btn btn-outline-primary">${link}</a>
      </div>
    </div>
  `;
}
