export class CodeSnippet
{
    constructor(s_Title,c_title, lang, desc, code, output)
    {
        this.snippetTitle = s_Title;
        this.codeTitle = c_title;
        this.codeLang = lang.toUpperCase();
        this.codeDesc = desc;
        this.codeSnipp = code;
        this.codeOutput = output;

        this.codeEntry = `
        <div class="codeSection">
            <div class="leftDiv_border"></div>

            <div class="codeSectionContent">
                <div class="langDiv">
                    <p class="html">${this.codeLang}</p>
                </div>

                <p class="codeTitle">${this.codeTitle}</p>

                <p class="codeDesc">${this.codeDesc}</p>
            </div>
        </div>`;


        this.codeView =`
        <div class="langDiv">
            <p class="html">${this.codeLang}</p>
        </div>

        <p class="codeSnippetTitle">${this.snippetTitle}</p>

        <p class="codeSnippetDesc">${this.codeDesc}</p>
    
        <div class="codeSnippetEntry">
            <div class="codeTitleDiv">
                <p class="codeItselfTitle">${this.codeTitle}</p>
            </div>

            <div class="codeOutputDiv">
                <p class="outputTitle">OUTPUT</p>
                
                <p class="codeSnippet">sadasdasdasd</p>
            </div>

            <div class="codeSnippetBtns">
                <input type="button" id="copySnippet" value="Copy Code">

                <input type="button" id="editSnippet" value="Edit">

                <input type="button" id="deleteSnippet" value="Delete">
            </div>
        </div>
        `;

    }

    getSnippetTitle()
    {
        return this.snippetTitle;
    }

    getCodeTitle()
    {
        return this.codeTitle;
    }

    getCodeLangauge()
    {
        return this.codeLang
    }

    getCodeDesc()
    {
        return this.codeDesc;
    }

    getCodeSnipp()
    {
        return this.codeSnipp;
    }

    getCodeOutput()
    {
        return this.codeOutput;
    }

    getCodeEntry()
    {
        let edited_codeDesc = this.codeDesc;
        let edited_codetitle = this.codeTitle;

        if(edited_codeDesc.length>117)
        {
            edited_codeDesc = this.codeDesc.substring(0,117) + "...";
        }

        if(edited_codetitle.length>26)
        {
            edited_codetitle = this.codeTitle.substring(0,26) + "...";
        }

        return(`
        <div class="codeSection">
            <div class="leftDiv_border"></div>

            <div class="codeSectionContent">
                <div class="langDiv">
                    <p class="html">${this.codeLang}</p>
                </div>

                <p class="codeTitle">${edited_codetitle}</p>

                <p class="codeDesc">${edited_codeDesc}</p>
            </div>
        </div>
        `);
    }

    getCodeView()
    {
        return this.codeView;
    }
}

export let tableOfContentElement = document.querySelector(".tableOfContents");

export const codeSnippetList = [];
export let codeSnippCounter = 0;

export let clickedId;

///////Helper Functions/////
export const setCodeSnippCounter = (counter) =>
{
    codeSnippCounter = counter;
}

export const pushCodeSnippet = (c) =>
{
    codeSnippetList.push(c);
    loadData();
}

//Works
//Will need to move this over to a handler somehow
export const deleteSnippet = () =>
{
    codeSnippetList.splice(clickedId, 1);

    //Clears the CodeSection View//
    document.querySelector("#snippetTitleInput").textContent = "";
    document.querySelector("#langInput").textContent = "";
    document.querySelector("#codeTitleInput").textContent = "";
    document.querySelector("#codeDesc").textContent ="";
    document.querySelector("#code").textContent = "";
    document.querySelector("#output").textContent = "";

    //Clears the CodeSnippet View//
    document.querySelector(".langDiv").innerHTML = ``;
    document.querySelector(".codeSnippetTitle").textContent = "";
    document.querySelector(".codeSnippetDesc").textContent ="";
    document.querySelector(".codeItselfTitle").textContent = "";
    document.querySelector(".codeSnippet").textContent = "";

    loadData();
}

export const setClickedId = (index) =>
{
    clickedId = index;
}

//////Managers//////
const loadData = () =>
{
    //Keep//
    tableOfContentElement.innerHTML = ``; //Clears the element of all HTML

    //Keep//
    for(let i = 0; i<codeSnippetList.length; i++)
    {
        
        tableOfContentElement.insertAdjacentHTML("afterbegin", codeSnippetList[i].getCodeEntry());

        tableOfContentElement.firstElementChild.dataset.id = i;
    }

    //Test Value//
    //If the list is empty, this forces a test value//
    if(codeSnippetList.length == 0)
    {
        //Test Values//
        let cs_snippetTitle1 = "asddsadads";//document.querySelector("#snippetTitleInput").value;
        let cs_codeTitle1 = "zxczczxczczasdasdasdasdasasdasddssad";//document.querySelector("#codeTitleInput").value;
        let cs_language1 = "qwewqeqew";//document.querySelector("#langInput").value;
        let cs_desc1 = "Officia aute ea anim consequat nostrud ipsum duis eu minim labore labore est cupidatat. Incididunt non proident aliqua sint irure reprehenderit. Officia mollit sunt cupidatat anim. Aliquip mollit pariatur occaecat velit. Occaecat occaecat qui aliqua reprehenderit labore magna quis occaecat irure nisi. Veniam consequat ad labore voluptate laboris.";//document.querySelector("#codeDesc").value;
        let cs_code1 = "bvnvbnvbnvnv";//document.querySelector("#code").value;
        let cs_output1 = "hkjhkhjkhjk";//document.querySelector("#output").value;

        const c = new CodeSnippet(cs_snippetTitle1, cs_codeTitle1, cs_language1, cs_desc1, cs_code1, cs_output1);
        codeSnippetList.push(c);

        //Will need to edit this a bit
        tableOfContentElement.insertAdjacentHTML("afterbegin", c.getCodeEntry());

        //Gives the initial value an dataset-id
        tableOfContentElement.firstElementChild.dataset.id = 0;

        document.querySelector(".langDiv").innerHTML = codeSnippetList[0].getCodeLangauge();

        document.querySelector(".codeSnippetTitle").textContent = codeSnippetList[0].getSnippetTitle();

        document.querySelector(".codeSnippetDesc").textContent = codeSnippetList[0].getCodeDesc();
        
        document.querySelector(".codeItselfTitle").textContent = codeSnippetList[0].getCodeTitle();

        document.querySelector(".codeSnippet").textContent = codeSnippetList[0].getCodeSnipp();
    }

    // console.log(codeSnippetList);

    // for(let i = 0; i<codeSnippetList.length; i++)
    // {

    //     console.log(tableOfContentElement.children[i].dataset.id);
    // }
}
loadData();