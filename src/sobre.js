import { mainContentContainer } from "./firstLoad";

const displaySobre = function () {
  mainContentContainer.innerHTML = "";

  const sobreContainer = document.createElement("div");
  sobreContainer.classList.add("sobreContainer", "containers");
  mainContentContainer.appendChild(sobreContainer);

  const loremIpsum = document.createElement("div");
  loremIpsum.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dictum turpis vel mollis. Nulla ac mauris pulvinar, vestibulum mi a, dictum elit. Proin tempor, eros vel pharetra consectetur, nisl diam condimentum purus, ac accumsan nisi nisl in neque. Mauris pellentesque magna eget massa congue tempor maximus aliquam quam. Phasellus suscipit auctor convallis. In hac habitasse platea dictumst. Nulla facilisi. Nullam lectus nunc, dictum quis urna at, aliquet vulputate ex. Donec cursus laoreet ante, non volutpat orci feugiat a. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dictum turpis vel mollis. Nulla ac mauris pulvinar, vestibulum mi a, dictum elit. Proin tempor, eros vel pharetra consectetur, nisl diam condimentum purus, ac accumsan nisi nisl in neque. Mauris pellentesque magna eget massa congue tempor maximus aliquam quam. Phasellus suscipit auctor convallis. In hac habitasse platea dictumst. Nulla facilisi. Nullam lectus nunc, dictum quis urna at, aliquet vulputate ex. Donec cursus laoreet ante, non volutpat orci feugiat a.";
    loremIpsum.classList.add('loremIpsum')
    sobreContainer.appendChild(loremIpsum)
};

export default displaySobre;
