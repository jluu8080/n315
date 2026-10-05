import { home } from "../pages/home.js";
import { secret } from "../pages/secret.js";
import { secretPage } from "../pages/secretPage.js";


export function loadPage(pageID)
{
    let pageContent = "";

    if(pageID ==="home")
    {
        pageContent = home;
    }
    else if(pageID === "secret")
    { 
        pageContent = secret;
    }
    else if(pageID === "secretPage")
    { 
        pageContent = secretPage;
    }
    else
    {
        pageContent = home;
    }

    document.querySelector("#app").innerHTML = pageContent;
}