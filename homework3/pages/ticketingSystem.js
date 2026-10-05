export default 
`
<section class="pageHistory">
    <div class="imagesList">
        <img src="images/ticketingSystemPrototype.jpeg">
    </div>

    <p id="pageHistoryText">
        The ticketing system began as paper tickets on my fridge, inspired by my years as a food runner. Mk.1 turned them into a web form that generated printable tickets, but every ticket showed the time the page loaded, and work orders leaked from one ticket into the next. Mk.2 fixed the time bug and added selecting and editing, but it left two bugs: several tickets could be selected at once, and new work orders didn't show up. Mk.3 is a full rebuild that started on paper, planning every div before writing any code.
    </p>
</section>

<section class="ticketForm">
    <p id="ticketFormHeader">Ticket Type</p>

    <div class="radioBtnsDiv">
        <input type="radio" name="ticketType" value="Assignment">
        <label>Assignment</label>

        <input type="radio" name="ticketType" value="Quiz">
        <label>Quiz</label>
        
        <input type="radio" name="ticketType" value="Self-Work">
        <label>Self-Work</label>
    </div>

    <div class="ticketDescDiv">
        <div class="checkNumDiv">
            <p>Check #:</p>
            <input type="text">
        </div>

        <div class="groupNameDiv">
            <p>Group Name:</p>
            <input type="text">
        </div>
    </div>
</section>


<section class="workOrderSection">
    
    <div class="workOrderDetails">
        <p>Work Order</p>


        <div class="workOrderDiv">
            <p>Work Order:</p>
            <input type="text">
        </div>

        <div class="dueDateDiv">
            <p>Due Date:</p>
            <input type="date">
        </div>
    </div>

    <div class="workOrderListDiv">
        <p class="workOrderListHeader">Work Order List</p>

        <div class="generatedWorkOrders">
            <div class="workOrder">

                <div class="workOrderDesc">
                    <p>Homework 1</p>
                    <p class="dueDate">9/9/26</p>
                </div>

                <div class="workOrderButtons">
                    <div onclick=""></div>
                    <div onclick=""></div>
                </div>
            </div>

            <div class="workOrder">

                <div class="workOrderDesc">
                    <p id="task">Homework 1</p>
                    <p class="dueDate">9/9/26</p>
                </div>

                <div class="workOrderButtons">
                    <div onclick=""></div>
                    <div onclick=""></div>
                </div>
            </div>
        </div>
    </div>
</section>


<div class="ticketButtons">
    <input type="button" value="Add Ticket" onclick="addTicket()">

    <input type="button" value="Generate Ticket" onclick="generateTicket()">

    <input type="button" value="Save Ticket" onclick="saveTicket()">
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
                        "Edit Ticket" onclick="editTicket()"></div>

                        <div name="Edit Ticket" onclick="deleteTicket()"></div>
                    </div>
                </div>
            </div>

            <div class="ticketBottom">
                <p id="ticketType">Assignment</p>

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