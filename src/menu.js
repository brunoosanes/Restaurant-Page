import { mainContentContainer } from "./firstLoad";

const displayMenu = function () {
  mainContentContainer.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer", "containers");
  mainContentContainer.appendChild(menuContainer);

  for (let i = 1; i <= 4; i++) {
    const pizzaContainer = document.createElement("div");
    pizzaContainer.classList.add(`pizzaContainer${i}`);
    menuContainer.appendChild(pizzaContainer);

    const pizzaImg = document.createElement("div");
    pizzaImg.classList.add(`pizzaImg${i}`);
    pizzaContainer.appendChild(pizzaImg);

    const pizzaTxt = document.createElement("div");
    pizzaTxt.classList.add(`pizzaTxt${i}`);
    pizzaContainer.appendChild(pizzaTxt);
  }

  function setPizzaTxt(pizzaNum, text) {
    document.querySelector(`.pizzaTxt${pizzaNum}`).innerHTML = text;
}

setPizzaTxt(1,'<span style="color:goldenrod; font-weight: bold">PEPPERONI</span> <br/> mozzarella, tomate, folhas e pepperoni');
setPizzaTxt(2,'<span style="color:goldenrod; font-weight: bold">MARGHERITA</span> <br/> mozzarella, rodelas de tomate e manjericão');
setPizzaTxt(3,'<span style="color:goldenrod; font-weight: bold">PORTUGUESA</span> <br/> mozzarella, tomate, folhas e pepperoni');
setPizzaTxt(4,'<span style="color:goldenrod; font-weight: bold">CALABRESA</span> <br/> mozzarella, tomate, folhas e pepperoni');


};


export default displayMenu;
