import "../sass/styles.scss";
import { loadPage } from "./model/model";


function changeRoute()
{
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#","");

  loadPage(pageID || "home");
  console.log(pageID);
}

function initApp()
{
  changeRoute();
  window.addEventListener("hashchange", changeRoute);
}

initApp();

document.querySelector('#app').innerHTML = ``;

