import { loadPage } from "./model.js";
import { showToast } from "./utility.js";

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

function initPageListeners()
{
    const loadBtn = document.querySelector("#loadBtn");

    // We do a check to make sure the loadBtn is even on the Page
    if(loadBtn)
    {
        loadBtn.addEventListener("click", loadData);
    }
}

function loadData()
{
    const data = document.querySelector("#data");
    showToast("Loading Data...", "loading");

    //pretending to laod Data
    setTimeout(() => 
    {
        data.innerHTML =
        `
            <h2>Got 'em!</h2>
            <p>HAHHA YOU FELL FOR IT!</p>
            <p>There was nothing!</p>

        `;

        showToast("Data Loaded Successfully", "success");

    }, 2000);
   
}

function initLogin()
{
    const loginBtn = document.querySelector("#loginBtn");
    const loginModal = document.querySelector("#loginModal");
    const closeModal = document.querySelector("#closeModal");
    const loginForm = document.querySelector("#loginForm");


    loginBtn.addEventListener("click", () =>
    {
        if(isLoggedIn)
        {
            isLoggedIn = false;
            loginBtn.innerHTML = "Login";

            showToast("You have sucessfully logged out", "info");
            return
        }

        loginModal.classList.add("modal--show");

    });

    closeModal.addEventListener("click", () => 
    {
        loginModal.classList.remove("modal--show");
    });

    loginForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim()

        if(email ==="")
        {
            showToast("Please enter your email address.", "error");
            return;
        }

        if(email.length<5)
        {
            showToast("Your email address is too short.", "error");
            return;
        }

        if(!email.includes("@"))
        {
            showToast("Please enter a valid email address.", "error");
            return;
        }

        if(password ==="")
        {
            showToast("Please enter your password.", "error");
            return;        
        }

        if(password.length < 6)
        {
            showToast("Password must be at least 6 characters.", "error");
            return;
        }

        if(email ==="secret@gmail.com" && password==="secret")
        {
            showToast("Loading Secure Page...","loadingSecret");

            setTimeout(() => 
            {
                showToast("Private Credentials Accepted...","success");
                loginModal.classList.remove("modal--show");
                window.location.hash="secretPage";

            }, 2000);
            
            return;
        }

        isLoggedIn = true;
        loginBtn.innerHTML = "Logout";
        showToast("You have successfully signed in!","success");
        loginModal.classList.remove("modal--show");
        loginForm.reset();

        return
    })
}

function initApp()
{
    initURListener();
    initLogin();
}

initApp();
