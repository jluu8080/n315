import home from "../pages/home.js";
import about from "../pages/about.js";
import services from "../pages/services.js";

export function loadPage(pageID)
{
    console.log(`model.s ${pageID}`);

    const main =document.querySelector("main");

    switch(pageID)
    {
        case "home":
            main.innerHTML = home;
        break;

        case "about":
            main.innerHTML = about;
        break;

        case "services":
            main.innerHTML = services;
        break;
    }
}