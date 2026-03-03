window.toggleMenu = function () {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

// MASONRY RESIZE
const resizeMasonryItem = (item) => {
  const grid = item.parentElement; // wrapper
  const rowHeight = parseInt(getComputedStyle(grid).gridAutoRows);
  const rowGap = parseInt(getComputedStyle(grid).gap);

  const img = item.querySelector("img");
  const height = img.getBoundingClientRect().height;

  const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
  item.style.setProperty("--rows", rowSpan);
};

const resizeAllMasonryItems = () => {
  document.querySelectorAll(".wrapper figure").forEach(resizeMasonryItem);
};

window.addEventListener("load", resizeAllMasonryItems);
window.addEventListener("resize", resizeAllMasonryItems);
