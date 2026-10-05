export default  
`
<section class="pageHistory">
    <div class="imagesList">
        <img src="images/workLogPrototype.jpeg">
    </div>

    <p id="pageHistoryText">
        The worklog started as a Google Doc where I wrote down the work I finished, and I wanted my own tool instead of relying on Google Docs. Mk.1 moved it into my site with a date picker, text box and buttons, but it logged placeholder text and never saved anything, but it was good for copying and pasting. I chose plain text files, so entries stay readable outside the app. Mk.2 rebuilds the page from the ground up.
    </p>
</section>

<section class="workLogSection">
    <div class="workLogContent">
        <label>Work Log</label>

        <div class="workLogInputs">
            <input type="date" name="Worklog Date" id="workLogDate">

            <textarea id="workLogEntryBox"></textarea>

            <input type="button" value="Log Entry">
            <input type="button" value="Copy Code">
        </div>

        <div id="workLogEntriesList">
            <p>Hi</p>
        </div>
    </div>

</section>
`;