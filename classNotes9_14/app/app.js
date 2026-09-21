//Exporting from files, you need to put it in the curly braces
//We import what we need, instead of the entire file.
//Controller is the app.js
//The view is the html

import {changePage, loadData} from '../model/model.js';


//querySelector needs to have a . or # for classes or id.
//A lot better than .getElementID and .getClass
const loadDataBtn = document.querySelector("#loadDataBtn");

loadDataBtn.addEventListener("click", () =>
{
    //DON'T ADD PARENTHESIS WE DON'T WANT TO RUN THE FUNCTION!
    //Just telling our loadData what function we want to run later
    loadData("Todd", myReturnedData);
});

function myReturnedData(data)
{
    console.log(`My Data is this ${data}`);
}

//Ending of loadData Function//

function initListeners()
{
    changePage("home");

    //This makes an array and this grab every anchor tag inside of the nav.
    //Bro this is so useful!! 
    const navLinks = document.querySelectorAll("nav a");

    //We loop through each a and adds an event listeners
    navLinks.forEach((link) => 
    {
        link.addEventListener("click", (e) =>
        {
            e.preventDefault(); //Stops this from doing anything, prevents it from bubbling (idk what this) aka clicking a button does A LOT OF THINGS!

            let btnId = e.currentTarget.id; //currentTarget aka what you clicked on and what the id is.

            changePage(btnId);
        })
    })
}



//There must be one function that gets everything started!
//But some things may work but when it comes to pages no.
initListeners();