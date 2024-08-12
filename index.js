document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".search-btn img");
  const searchInput = document.querySelector(".search-input");
  const searchContainer = document.querySelector(".search-container");

  searchBtn.addEventListener("click", () => {
    searchContainer.classList.toggle("show");
    if (searchContainer.classList.contains("show")) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener("blur", () => {
    searchContainer.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    if (window.scrollY > hero.clientHeight) {
      header.classList.remove("transparent");
    } else {
      header.classList.add("transparent");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const rowContent1 = document.querySelector(".row1");
  const indicator = document.querySelector(".indicator");
  const items = document.querySelectorAll(".row-content1 img");

  rowContent1.addEventListener("scroll", () => {
    const scrollLeft = rowContent1.scrollLeft;
    const itemWidth =
      items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    const index = Math.round(scrollLeft / itemWidth);
    const newItem = items[index];
    if (newItem) {
      const itemRect = newItem.getBoundingClientRect();
      const wrapperRect = rowContent1.getBoundingClientRect();
      indicator.style.left = `${itemRect.left - wrapperRect.left}px`;
      indicator.style.width = `${newItem.offsetWidth}px`;
    }
  });
});
