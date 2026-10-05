export default
`
<section class="pageHistory">
    <div class="imagesList">
        <img src="images/questsPagePrototype.jpeg">
    </div>

    <p id="pageHistoryText">
        Quests breaks big projects into numbered steps. I first tested the idea in Google Slides with a 21-step Calculus module, then coded it with Quest and SubTask classes. That version kept tasks and subtasks in two separate lists that could fall out of step, and a variable named the same as its class crashed the code. Mk.2 rebuilds it as a Quest Step Maker page with task, subtask and quest condition controls.
    </p>
</section>

<section class="questDescriptionSection">
    <h2>Quest Description</h2>

    <div class="questDescTop">
        <div class="questTitleDiv">
            <p>Quest Title:</p>

            <input type="text" id="questTitleInput">
        </div>

        <div class="questStepsDiv">
            <p>Total Steps:</p>

            <input type="number" id="questTotalSteps">
        </div>
    </div>

    <div class="questDescBottom">
        <div class="questDesc">
            <p>Quest Description</p>
            
            <input type="text" id="questDescInput">
        </div>
    </div>
</section>

<section class="questStepMakerTopSection">
    <div class="questStepMakerLeft">
        <h2>Quest Step Maker</h2>
        <p id="currentStepNum">Current Step: </p>


        <div class="questTaskInputs">
            <div class="questTask">
                <p>Task:</p>

                <textarea id="questTaskInput"></textarea>

                <div class="addTaskBtn">
                    <input type="button" value="Add Task" onclick="">
                </div>
            </div>

            <div class="questSubTask">
                <p>Sub Task:</p>
                <textarea id="questSubTaskInput"></textarea>

                <div class="addSubTaskBtn">
                    <input type="button" value="Add Subtask" onclick="">
                </div>
            </div>
        </div>
    </div>


    <div class="questStepMakerRight">
        <div class="questStepViewer">
            <h3>Step Viewer</h3>

            <div class="stepViewerContent">
                <p id="currentQuestStep">Step 1 of #</p>
            </div>

            <div class="questTaskList">

                <div class="questTask">
                    <div class="questTaskLeft">

                        <p id="questTaskName">Task:</p>

                        <p id="questTaskDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, architecto ex voluptatum dolor alias quasi aspernatur reiciendis rerum aliquam soluta. Laboriosam magnam vero possimus nemo. Inventore atque voluptatem accusantium ipsam.</p>
                    </div>

                    <div class="questTaskRight">

                        <div class="questTaskEditBtns">
                            <div class="editTask"></div>

                            <div class="deleteTask"></div>
                        </div>

                    </div>

                </div>

                <div class="questTask">
                    <div class="questTaskLeft">

                        <p id="questTaskName">Task:</p>

                        <p id="questTaskDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, architecto ex voluptatum dolor alias quasi aspernatur reiciendis rerum aliquam soluta. Laboriosam magnam vero possimus nemo. Inventore atque voluptatem accusantium ipsam.</p>
                    </div>

                    <div class="questTaskRight">

                        <div class="questTaskEditBtns">
                            <div class="editTask"></div>

                            <div class="deleteTask"></div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>

</section>

<section class="questStepMakerBottom">
    <div class="questConditionList">
        <input type="button" value="Prerequisites" onclick="">

        <input type="button" value="Restrictions" onclick="">

        <input type="button" value="Reward" onclick="">
    </div>

    <textarea></textarea>


    <div class="addQuestConditionrBtnDiv">
        <input type="button" id="addQuestConditionBtn" value="Add Quest Condition" onclick="">
    </div>
</section>
`