import home from "./pages/home.js";

export function loadPage(pageID)
{
    document.querySelector('#app').innerHTML = home();
}