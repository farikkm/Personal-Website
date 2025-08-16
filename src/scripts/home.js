const headerItems = document.querySelectorAll(".header__item");

export function init() {
  headerItems.forEach((item) => {
    item.addEventListener("click", () => toggleActive(item));
  });
}

function toggleActive(item) {
  headerItems.forEach((item) => item.classList.remove("_active"));
  item.classList.add("_active");
}
