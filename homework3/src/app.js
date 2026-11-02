import {loadPage} from "./model.js";

import {workLogDataLoad} from "./worklog/workLogManager.js";
import {copyEntryHandler, logEntryHandler } from "./worklog/workLogHandler.js";
import { copySnippetBtnHandler, deleteSnippetBtnHandler, editSnippetBtnHandler, newSnippetBtnHander, saveButtonHandler, tableOfContentsHandler } from "./codeCheatSheet/cs_Handler.js";
import { tableOfContentElement } from "./codeCheatSheet/cs_Manager.js";

function changeRoute()
{
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

    console.log(pageID);
    loadPage(pageID);
}


function initApp()
{
    loadPage("home");
    window.addEventListener("hashchange", changeRoute);
}

// initApp();


// let ticketsList = [];

// class ticket
// {
//     constructor(time, tType, cNum, gName, wOrder)
//     {
//         this.time = time;
//         this.ticketType = tType;
//         this.checkNum = cNum;
//         this.groupName = gName

//         this.workOrder = wOrder;
//     }

//     setTicketType(tType)
//     {
//         this.ticketType = tType;
//     }

//     setCheckNum(cNum)
//     {
//         this.checkNum = cNum;
//     }

//     setWorkOrder(wOrder)
//     {
//         this.workOrder = wOrder;
//     }

//     getTicketType()
//     {
//         return this.ticketType;
//     }

//     getCheckNum()
//     {
//         return this.checkNum;
//     }

//     getWorkOrder()
//     {
//         return this.workOrder
//     }

//     toString()
//     {
//         return `<div class="ticket">
            
//             <div class="ticketTop">

//                 <div class="ticketTopLeft">
//                     <p id="ticketTime">Time: ${this.time}</p>

//                     <p id="ticketGroup">Group Name: ${this.groupName}</p>
//                 </div>

//                 <div class="ticketTopRight">
//                     <div class="ticketEditBtns">
//                         <div name=
//                         "Edit Ticket" id="editTicketBtn"></div>

//                         <div name="Edit Ticket" id="deleteTicketBtn"></div>
//                     </div>
//                 </div>
//             </div>

//             <div class="ticketBottom">
//                 <p id="ticketType">${this.ticketType}</p>

//                 <!-- Testing Values -->
//                 <div class="workOrderList">
//                     <div class="workOrder">
//                         <p id="task">Homework 1</p>
//                         <p id="dueDate">Due Date:</p>
//                     </div>

//                     <div class="workOrder">
//                         <p id="task">Homework 1</p>
//                         <p id="dueDate">Due Date:</p>
//                     </div>
//                 </div>
//             </div>
//         </div>`

//     }
// }

// // let ticketForm = document.querySelector(".ticketForm");

// // ticketForm.addEventListener();

// let generatedTickets = document.querySelector(".generatedTickets");

// //let = Work Order....
// let getTime= () =>
// {
//     const today = new Date();
//     let time = today.getHours() + ":";
    
//     if(today.getMinutes() <10)
//     {
//         time += "0" + today.getMinutes();
//     }
//     else
//     {
//         time += today.getMinutes();
//     }
//     console.log(time);
//     return time;
// }

// //This may be a pain to do it this way, but I haven't had a string logic problem to solve for awhile.

// //I essentially just made the split method for this smh
// //Replace with split later
// // const dateFormatter = (date) =>
// // {
// //     let splitB = 0;
// //     let stringSlice = date;

// //     let year_month =[];


// //     //Not the cleanest manipulator but with my current knowleged that's all I got.
// //     while(splitB !=-1)
// //     {    
// //         splitB = stringSlice.indexOf("-");
// //         console.log(splitB);
// //         console.log("stringslice (begin): " + stringSlice);

// //         year_month.push(stringSlice.substring(0, splitB));
// //         console.log("SplitAList: " + year_month);

// //         stringSlice = stringSlice.slice(splitB+1);
// //         console.log("stringslice (end): " + stringSlice);

// //         // splitAList.push(splitA);
// //         // splitBList.push(splitB);
// //     }

// //     let month = year_month[1]
// //     let year = year_month[0];
// //     let day = stringSlice; //Only value left over.

// //     //Might need to work on the format later.
// //     date = `${month} / ${day} / ${year}`;
// //     return date;
// // }
const dateFormatter = (date) => {
    const [year, month, day] = date.split("-");
    
    date = `${month} / ${day} / ${year}`;

    return date;
};

// let generatedWorkOrdersContainer = document.querySelector(".generatedWorkOrders");
// let workOrderList= [];

// const loadWorkOrders = () =>
// {
//     //I'm going to need this line later.
//     generatedWorkOrdersContainer.innerHTML = ``; //Clears the div

//     //For now, I need to children

//     //Nothing here is printing
//     //Fixed
//     for(let i = 0; i<workOrderList.length; i++)
//     {
//         generatedWorkOrdersContainer.insertAdjacentHTML("afterbegin", workOrderList[i]);

//         generatedWorkOrdersContainer.firstElementChild.dataset.id = i;

//         // console.log(generatedWorkOrdersContainer[i].dataset.id);
//         // console.log(generatedWorkOrdersContainer[i]);
//     }
//     // console.log(generatedWorkOrdersContainer.firstElementChild.dataset.id);
//     // console.log(generatedWorkOrdersContainer.length);


//     // console.log(generatedWorkOrdersContainer.children[0].dataset.id);
//     console.log("I Loaded...");
// }
// // loadWorkOrders();



// //Need to add additional and or rework the divs so the buttons don't move down with the work order list.
// const addWorkOrderBtnElement = document.querySelector("#addWorkOrderBtn");

// addWorkOrderBtnElement.addEventListener("click", function(e)
// {

//     let task = "asassdasdasd";//document.querySelector("#workOrderInput").value;
//     let dueDate = dateFormatter("2026-10-20");//document.querySelector("#dueDateInput").value;

//     let workOrderElement = 
//     `
//     <div class="workOrder">

//         <div class="workOrderDesc">
//             <p id="task">${task}</p>
//             <p id="dueDate">${dueDate}</p>
//         </div>

//         <div class="workOrderButtons">
//             <div id="workOrderEditBtn"></div>
//             <div id="workOrderDeleteBtn"></div>
//         </div>

//         <div class="workOrderEdit">
//             <div class="editInputs">
//                 <input type="text" id="WO_task">
//                 <input type="date" id="WO_dueDate">
//             </div>

//             <div class="WOEdit_btns">
//                 <div id ="saveBtn"></div>
//                 <div id="exitEditBtn"></div>
//             </div>
//         </div>
//     </div>
//     `;

//     workOrderList.push(workOrderElement);
//     // generatedWorkOrdersContainer.insertAdjacentHTML("afterbegin", workOrderElement);

//     loadWorkOrders();
// })


// generatedWorkOrdersContainer.addEventListener("click", function(e)
// {
//     const workOrder = e.target.closest(".workOrder");

//     if(!workOrder)
//     {
//         return;
//     }


//     //Deletion Works but I need to get edit elements working later.
//     if(e.target.closest("#workOrderDeleteBtn"))
//     {
//         const d = e.target.closest(".workOrder");
//         let deleteIndex = d.dataset.id;

//         workOrderList.splice(deleteIndex, 1);
//         loadWorkOrders();
//         console.log(workOrderList);
//     }

//     // //Card in Edit Mode//
//     // //Done
//     if(e.target.closest("#workOrderEditBtn"))
//     {
//         //Target what div in which this button was clicked.
//         const d = e.target.closest(".workOrder");

//         //Store the dataset id, it was given when loadRolls() was runned
//         let currentIndex = d.dataset.id;
//         console.log(currentIndex);

//         //Hide the Roll Description and Roll Edit Buttons
//         //Reveal Elements to put the .roll div into edit mode        
//         d.querySelector(".workOrderDesc").style.display = "none";
//         d.querySelector(".workOrderButtons").style.display = "none";

//         d.querySelector(".workOrderEdit").style.display = "flex";
//     }
//     // //Initial Card Load End//

//     // //Done
//     if(e.target.closest("#exitEditBtn"))
//     {
//         const d = e.target.closest(".workOrder");
//         let currentIndex = d.dataset.id;
//         console.log(currentIndex);

//         //This should show
//         d.querySelector(".workOrderDesc").style.display = "flex";

//         //This should show
//         d.querySelector(".workOrderButtons").style.display = "flex";

//         //This should hide itself
//         d.querySelector(".WorkOrderEdit").style.display = "none";
//     }


//     // //Done
//     if(e.target.closest(".saveEditBtn"))
//     {
//         const d = e.target.closest(".roll");
//         let currentIndex = d.dataset.id;
//         console.log(currentIndex);

//         //Exits Edit Mode 
//         d.querySelector(".workOrderDesc").style.display = "";

//         d.querySelector(".workOrderButtons").style.display = "";

//         d.querySelector(".WorkOrderEdit").style.display = "flex";
//     }
// })

// //Need to change display:flex --> Grid for generated Tickets Later.
// const addTicketBtnElement = document.querySelector("#addTicketBtn");
// //I'm what I wanna do with this, for mass-makking of Tickets.
// let checkNumber; //To save the Check Number for mass making of Tickets
// addTicketBtnElement.addEventListener("click", function(e)
// {    
//     //If one of the Ticket's Input Fields are left empty 
//     try
//     {
//         //Grabs all the ticket Details
//         const selected = document.querySelector('input[name="ticketType"]:checked');

//         const ticketType ="Assignment"// selected ? selected.value : null;
//         console.log(ticketType);

        
//         checkNumber = 1;//document.querySelector("#checkNum").value;
//         console.log(checkNumber);

//         let groupName = "Todd";//document.querySelector("#groupName").value;
//         console.log(groupName);


//         //Gonna turn this into a non-let variable in a sec
//         workOrdersContainer = "Hi";//document.querySelector(".generatedWorkOrders");

//         let time = getTime();

//         //Ticket Details are store into a Ticket Object aka Generates a Ticket Object
//         const t = new ticket(time, ticketType, checkNumber, groupName, workOrdersContainer);

//         console.log(t);
//         //Ticket Object is stored into an array for later usage
//         ticketsList.push(t);

//         //Inserts the generated ticket within the "generatedTickets" element
//         generatedTickets.insertAdjacentHTML("afterbegin", t);

//     }
//     catch(error)
//     {
//         alert("One of the Ticket Fields is empty. Please fill the Ticket in its entirety.");
//     }

// })

//Will need to separate this later into its own file.
/////////Work Log Code//////////////////


// workLogDataLoad();


// const logEntryBtnElement = document.querySelector("#logEntryBtn");
// const copyEntryBtn = document.querySelector("#copyEntryBtn");

// copyEntryBtn.addEventListener("click", copyEntryHandler);

// logEntryBtnElement.addEventListener("click", logEntryHandler);


/////Coding Cheat Sheets/////
//Code Snippet
// let cs_title = document.querySelector("#titleInput").value;

// let cs_language = document.querySelector("#langInput").value;

// let cs_desc = document.querySelector("#codeDesc").value;

// let cs_code = document.querySelector("#code").value;

// let cs_output = document.querySelector("#output").value;
const newSaveSnippetBtn = document.querySelector("#newSnippetBtn");
newSaveSnippetBtn.addEventListener("click", newSnippetBtnHander);

const copySnippetBtn = document.querySelector("#copySnippet");
copySnippetBtn.addEventListener("click", copySnippetBtnHandler);

const editSnippetBtn = document.querySelector("#editSnippet");
editSnippetBtn.addEventListener("click", editSnippetBtnHandler);

const deleteSnippetBtn = document.querySelector("#deleteSnippet");
deleteSnippetBtn.addEventListener("click", deleteSnippetBtnHandler);

const saveSnippetBtn = document.querySelector("#saveSnippetBtn");
saveSnippetBtn.addEventListener("click", saveButtonHandler);


tableOfContentElement.addEventListener("click", tableOfContentsHandler);