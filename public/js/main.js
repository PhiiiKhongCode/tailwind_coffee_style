const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenu = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenu.contains(e.target)) {
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("ct-top-menu-expended");
  } else {
    if (topMenu.classList.contains("ct-top-menu-expended")) {
      topMenu.classList.remove("ct-top-menu-expended");
      topMenu.classList.add("hidden");
    }
  }
});
