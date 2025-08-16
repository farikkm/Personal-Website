import { Route } from "../utils/route.js";

const routes = [
  new Route(/^\/$/, "home"),
  new Route(/^\/about\/?$/, "aboout"),
  new Route(/^\/favorites\/?$/, "contact"),
];

const page404 = new Route("/page-not-found", "404");

let currentModule;

const router = async () => {
  const path = window.location.pathname;
  const match = findMatch(path) || page404;

  await match.loadView();
  match.loadStyles();

  currentModule?.destroy?.();

  if (match.filename) {
    import(`../scripts/${match.filename}.js`)
      .then((module) => {
        module.init?.();
        currentModule = module;
      })
      .catch(() => {
        console.warn("Error: Script file is not loaded");
      });
  }
};

const navigateTo = (url) => {
  window.history.pushState(null, null, url);
  router();
};

function findMatch(path) {
  return routes.find((route) => {
    if (route.path instanceof RegExp) {
      return route.path.test(path);
    }
    return route.path === path;
  });
}

export { router, navigateTo };
