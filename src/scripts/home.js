const headerItems = document.querySelectorAll(".header__item");

headerItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerItems.forEach((item) => item.classList.remove("_active"));

    item.classList.add("_active");
  });
});
