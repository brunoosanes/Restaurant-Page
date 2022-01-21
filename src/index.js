import displayHome from "./home";
import { firstLoad } from "./firstLoad";
import displayMenu from "./menu";
import displaySobre from "./sobre";
import displayContato from "./contato";
import "../src/style.css";
import "../src/imgs/calabresa.jpg";
import "../src/imgs/marguerita.jpg";
import "../src/imgs/pepperoni.jpg";
import "../src/imgs/portuguesa.jpg";

firstLoad();

const homeTab = document.querySelector(".home");
const menuTab = document.querySelector(".menu");
const sobreTab = document.querySelector(".about");
const contatoTab = document.querySelector(".contact");

homeTab.addEventListener("click", displayHome);
menuTab.addEventListener("click", displayMenu);
sobreTab.addEventListener("click", displaySobre);
contatoTab.addEventListener("click", displayContato);
