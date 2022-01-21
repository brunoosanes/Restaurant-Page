import displayHome from "./home";

const mainContentContainer = document.createElement("div");
mainContentContainer.classList.add("mainContentContainer");

const firstLoad = function () {
  const content = document.querySelector("#content");

  const header = document.createElement("div");

  const home = document.createElement("div");
  home.classList.add("tabs", "home");
  home.innerText = "HOME";
  header.appendChild(home);

  const menu = document.createElement("div");
  menu.classList.add("tabs", "menu");
  menu.innerText = "MENU";
  header.appendChild(menu);

  const about = document.createElement("div");
  about.classList.add("tabs", "about");
  about.innerText = "SOBRE";
  header.appendChild(about);

  const contact = document.createElement("div");
  contact.classList.add("tabs", "contact");
  contact.innerText = "CONTATO";
  header.appendChild(contact);

  header.classList.add("header");
  content.appendChild(header);

  content.appendChild(mainContentContainer);

  displayHome();

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerText = "Developed by: Bruno Osanes";
  content.appendChild(footer);
};

export { mainContentContainer, firstLoad };
