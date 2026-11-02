export default 
`
<!-- <section class="pageHistory">
    <div class="imagesList">
        <img src="images/ticketingSystemPrototype.jpeg">
    </div>

    <p id="pageHistoryText">
        The ticketing system began as paper tickets on my fridge, inspired by my years as a food runner. Mk.1 turned them into a web form that generated printable tickets, but every ticket showed the time the page loaded, and work orders leaked from one ticket into the next. Mk.2 fixed the time bug and added selecting and editing, but it left two bugs: several tickets could be selected at once, and new work orders didn't show up. Mk.3 is a full rebuild that started on paper, planning every div before writing any code.
    </p>
</section> -->

<section class="ticketForm">
    <p id="ticketFormHeader">Ticket Type</p>

    <div class="radioBtnsDiv">
        <input type="radio" name="ticketType" value="Assignment" id = "ticketType_Assignment">
        <label for="ticketType_Assignment">Assignment</label>

        <input type="radio" name="ticketType" value="Quiz" id ="ticketType_Quiz">
        <label for ="ticketType_Quiz">Quiz</label>
        
        <input type="radio" name="ticketType" value="Self-Work" id="ticketType_Self-Work">
        <label for ="ticketType_Self-Work">Self-Work</label>
    </div>

    <div class="ticketDescDiv">
        <div class="checkNumDiv">
            <p>Check #:</p>
            <input type="number" id="checkNum">
        </div>

        <div class="groupNameDiv">
            <p>Group Name:</p>
            <input type="text" id="groupName">
        </div>
    </div>

</section>


<section class="workOrderSection">
    
    <div class="workOrderDetails">
        <p>Work Order</p>


        <div class="workOrderDiv">
            <p>Work Order:</p>
            <input type="text" id="workOrderInput">
        </div>

        <div class="dueDateDiv">
            <p>Due Date:</p>
            <input type="date" id="dueDateInput">
        </div>
    </div>

    <!-- I'm going to need to make a better looking layout than this,
    but for now it's functional. -->
    <div class="workOrderListDiv">
        <p class="workOrderListHeader">Work Order List</p>

        <div class="generatedWorkOrders">
            <div class="workOrder">

                <div class="workOrderDesc">
                    <p>Homework 1</p>
                    <p class="dueDate">9/9/26</p>
                </div>

                <div class="workOrderButtons">
                    <div id="workOrderEditBtn"></div>
                    <div id="workOrderDeleteBtn"></div>
                </div>
            </div>

            <div class="workOrder">

                <div class="workOrderDesc">
                    <p id="task">Homework 1</p>
                    <p class="dueDate">9/9/26</p>
                </div>

                <div class="workOrderButtons">
                    <div id="workOrderEditBtn"></div>
                    <div id="workOrderDeleteBtn"></div>
                </div>

                <div class="workOrderEdit">
                    <div class="editInputs">
                        <input type="text" id="WO_task">
                        <input type="date" id="WO_dueDate">
                    </div>

                    <div class="WOEdit_btns">
                        <div id ="saveBtn"></div>
                        <div id="exitEditBtn"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- I'm going to need to move these buttons to a better spot later. -->
<div class="ticketButtons">
    <input type="button" value="Add Work Order" id="addWorkOrderBtn">

    <input type="button" value="Add Ticket" id="addTicketBtn">

    <!-- <input type="button" value="Generate Ticket" onclick="generateTicket()">

    <input type="button" value="Save Ticket" onclick="saveTicket()"> -->
</div>


<section class="ticketsSection">
    <div class="ticketSectionHeader">
        <p>Tickets</p>
    </div>

    <div class="generatedTickets">
        <div class="ticket">
            
            <div class="ticketTop">

                <div class="ticketTopLeft">
                    <p id="ticketTime">Time: </p>

                    <p id="ticketGroup">Group Name:</p>
                </div>

                <div class="ticketTopRight">
                    <div class="ticketEditBtns">
                        <div name=
                        "Edit Ticket" id="editTicketBtn"></div>

                        <div name="Edit Ticket" id="deleteTicketBtn"></div>
                    </div>
                </div>
            </div>

            <div class="ticketBottom">
                <p id="ticketType">Assignment</p>

                <!-- Testing Values -->
                <div class="workOrderList">
                    <div class="workOrder">
                        <p id="task">Homework 1</p>
                        <p id="dueDate">Due Date:</p>
                    </div>

                    <div class="workOrder">
                        <p id="task">Homework 1</p>
                        <p id="dueDate">Due Date:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;