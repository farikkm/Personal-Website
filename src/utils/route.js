const app = document.getElementById("app");

class Route {
  constructor(path, filename) {
    this.path = path;
    this.filename = filename;
  }

  async loadView() {
    const res = await fetch(`/src/pages/${this.filename}.html`);
    const content = await res.text();

    app.innerHTML = content;
  }

  loadStyles() {
    let linkTag = document.querySelector("link[data-page-css]");

    if (linkTag) {
      linkTag.href = `/src/styles/${this.filename}.css`;
    } else {
      linkTag = document.createElement("link");
      linkTag.setAttribute("data-page-css", "");
      linkTag.rel = "stylesheet";
      linkTag.href = `src/styles/${this.filename}.css`;

      document.head.appendChild(linkTag);
    }
  }
}

export { Route };
