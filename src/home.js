import { mainContentContainer } from "./firstLoad";

const displayHome = function () {
  mainContentContainer.innerHTML = "";
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer", "containers");
  mainContentContainer.appendChild(homeContainer);

  const mainText = document.createElement("div");
  mainText.classList.add("mainText");
  mainText.innerText = "L'arte della pizza";
  homeContainer.appendChild(mainText);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menuBtn");
  menuBtn.textContent = "VER MENU";
  homeContainer.appendChild(menuBtn);
};

export default displayHome;
