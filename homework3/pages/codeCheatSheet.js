export default
`
<section class="pageHistory">
    <div class="imagesList">
        <img src="images/codeCheatSheetPrototype.jpg">
    </div>

    <p id="pageHistoryText">
        The cheat sheet started as layout prototypes that Claude generated to help me decide what the tool should look like. I then built my own version around a Snippet class, with click-to-view cards and one-click copying. It still had bugs, like edits creating duplicate snippets. Mk.2 rebuilds the page with a table of contents on the left and a snippet form on the right, ready for that logic to move in.
    </p>
    
</section>

<div class="newSnippetDiv">
    <input type="button" id="newSnippetBtn"  value="New Snippet" onclick="">
</div>

<section class="left_RightSections">
    <div class="leftDiv">
        
        <div class="tableOfContents">

            <div class="codeSection">
                <div class="borderLeftDiv"></div>

                <div class="codeSectionContent">
                    <div class="langDiv">
                        <p class="html">HTML</p>
                    </div>

                    <p>Intro 1</p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et soluta debitis saepe officiis</p>
                </div>
            </div>

            <div class="codeSection">
                <div class="borderLeftDiv"></div>

                <div class="codeSectionContent">
                    <div class="langDiv">
                        <p class="html">HTML</p>
                    </div>

                    <p>Intro 1</p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et soluta debitis saepe officiis</p>
                </div>
            </div>
        </div>
    </div>

    <div class="rightDiv">

        <!-- <div class="newSnippetDiv">
        <input type="button" id="newSnippetBtn"  value="New Snippet" onclick="">
        </div> -->
        
        <div class="newCodeSnippetForm">

            <div class="titleLanguageDiv">

                <div class="titleInputDiv">
                    <p>Title:</p>
                    <input type="text" id="titleInput">
                </div>

                <div class="langInputDiv">
                    <p>Lanuguage:</p>
                    <input type="text" id="langInput">
                </div>

            </div>

            <div class="codeDesc">
                <p>What it does:</p>
                <textarea name="" id=""></textarea>
            </div>

            <div class="codeSnippet">
                <p>Code Snippet</p>
                <textarea name="" id=""></textarea>
            </div>

            <div class="codeOutput">
                <p>Output</p>
                <textarea name="" id=""></textarea>
            </div>

            <div class="newCodeSnippetFormBtns">
                <input type="button" id="saveSnippetBtn" value="Save Snippet" onclick="">

                <input type="button" id="cancelSnippetBtn" value="Cancel Snippet" onclick="">
            </div>
        </div>

        <div class="codeSnippetView">
            <div class="langDiv">
                <p class="html">HTML</p>
            </div>

            <p class="codeSnippetTitle">Introduction 1</p>

            <p class="codeDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi quam aliquam error tenetur id culpa cumque suscipit quos debitis dolorem, amet accusamus quae, repudiandae corporis autem rerum maiores placeat.</p>
        
            <div class="codeSnippetEntry">
                <div class="codeTitleDiv">
                    <p class="codeTitle">Print("Hello");</p>
                </div>

                <div class="codeOutputDiv">
                    <p class="outputTitle">OUTPUT</p>
                    
                    <p class="codeSnippet">sadasdasdasd</p>
                </div>

                <div class="codeSnippetBtns">
                    <input type="button" id="copySnippet" onclick="">

                    <input type="button" id="editSnippet" onclick="">

                    <input type="button" id="deleteSnippet" onclick="">
                </div>
            </div>
        </div>
    </div>
</section>
`;