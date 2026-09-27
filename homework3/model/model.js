import home from "../pages/home.js";
import ticketingSystem from "../pages/ticketingSystem.js";
import codeCheatSheet from "../pages/codeCheatSheet.js";
import worklog from "../pages/worklog.js";
import quests from "../pages/quests.js";

export function loadPage(pageID)
{

    const main =document.querySelector("main");

    switch(pageID)
    {
        case "home":
            main.innerHTML = home;
        break;

        case "ticketingSystem":
            main.innerHTML = ticketingSystem;
        break;

        case "codeCheatSheet":
            main.innerHTML = codeCheatSheet;
        break;

        case "worklog":
            main.innerHTML = worklog;
        break;


        case "quests":
            main.innerHTML = quests;
        break;

    }
}