import { router, navigateTo } from "./router";

document.addEventListener("DOMContentLoaded", () => {
  router();

  document.addEventListener("click", (event) => {
    const elem = event.target;
    const hasAttr = elem.hasAttribute("data-link");

    if (hasAttr) {
      event.preventDefault();
      navigateTo(elem.href);
    }
  });

  window.onpopstate = router; // back and forward
});
