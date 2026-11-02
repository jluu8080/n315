import "../sass/styles.scss";
import { loadPage } from "./model/model";

function changeRoute()
{
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#","");

  loadPage(pageID || "home");
  console.log(pageID);

  document.body.className = pageID;
}

function initApp()
{
  changeRoute();
  window.addEventListener("hashchange", changeRoute);
}

initApp();
document.querySelector('#app').innerHTML = ``;


//Hamburger Code
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => links.classList.toggle('open'));

// close the menu after picking a page
window.addEventListener('hashchange', () => links.classList.remove('open'));