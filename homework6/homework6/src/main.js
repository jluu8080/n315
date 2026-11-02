import "../sass/styles.scss";
import { loadPage } from "./model/model";

function changeRoute()
{
  const pageID = window.location.hash.replace("#", "") || "home";

  document.body.className = pageID;
  loadPage(pageID);
}

function initApp()
{
  changeRoute();
  window.addEventListener("hashchange", changeRoute);
}

initApp();


//Hamburger Code
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => links.classList.toggle('open'));

// close the menu after picking a page
window.addEventListener('hashchange', () => links.classList.remove('open'));