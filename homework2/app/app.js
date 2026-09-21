import {changePage} from '../model/model.js';

function initListeners()
{
    changePage("home");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => 
    {
        link.addEventListener("click", (e) =>
        {
            e.preventDefault();

            let btnId = e.currentTarget.id;

            changePage(btnId);
        })
    })
}

//There must be one function that gets everything started!
//But some things may work but when it comes to pages no.
initListeners();