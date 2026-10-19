let isLoggedIn = false;

function changeRoute()
{
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if(pageID)
    {
        loadPage(pageID);
    }
    else
    {
        loadPage("home");
    }

    initPageListeners();
}

function initURListener()
{
    window.addEventListener("hashchange", changeRoute);

    changeRoute();
}

function initApp()
{
    initURListener();
}

// initApp();