import "../sass/styles.scss";
import { login, logout, signUp, auth } from "./firebase";
import { loadPage } from "./model/model";
import { onAuthStateChanged } from "firebase/auth";

let loggedIn = false;
const headerBtnElement = document.querySelector(".headerBtn");


function changeRoute()
{
  const pageID = window.location.hash.replace("#", "") || "home";

  if(pageID == "login" && loggedIn == true)
  {
    //Placeholder code
    console.log(pageID);
    logout();
    window.location.hash = "home";
    loggedIn = false;

    alert("log out successful");
  }
  else
  {
    document.body.className = pageID;
    loadPage(pageID);
  }
    
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


//Authentication Code
document.addEventListener("click", async (e) =>
{
  //Signing up
  if (e.target.id === "signUpBtn")
  {
    try
    {
      const email_signup = document.querySelector("#emailInput_signup").value;
      const password_signup = document.querySelector("#passwordInput_signup").value;

      await signUp(email_signup, password_signup);
      loggedIn = true;
      window.location.hash = "home";
      alert("sign up successful");

    }
    catch (error)
    {
      alert(error);
      console.error(error);
    }
  }

  //Logging in
  if (e.target.id === "loginBtn")
  {
    try
    {
      const email_login = document.querySelector("#emailInput_login").value;
      const password_login = document.querySelector("#passwordInput_login").value;

      await login(email_login, password_login);
      loggedIn = true;
      window.location.hash = "home";

      alert("You're logged in");
    }
    catch (error)
    {
      alert(error);
      console.error(error);
    }
  }
});

//Unsure whether to remove this or not?
onAuthStateChanged(auth, (user) =>
{
  loggedIn = user !== null;
  headerBtnElement.textContent = loggedIn ? "Logout" : "Login";
});