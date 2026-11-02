
// let codeSnippetForm = document.querySelector(".newCodeSnippetForm");

import { clickedId, CodeSnippet, codeSnippetList, deleteSnippet, pushCodeSnippet, setClickedId } from "./cs_Manager.js";

export const newSnippetBtnHander = (e) =>
{
    //Clears all the inputs
    document.querySelector("#snippetTitleInput").value = "";
    document.querySelector("#langInput").value="";
    document.querySelector("#codeTitleInput").value = "";
    document.querySelector("#codeDesc").value = "";
    document.querySelector("#output").value = "";

    // let cs_snippetTitle = "asddsadads";//document.querySelector("#snippetTitleInput").value;

    // let cs_codeTitle = "zxczczxczcz";//document.querySelector("#codeTitleInput").value;

    // let cs_language = "qwewqeqew";//document.querySelector("#langInput").value;

    // let cs_desc = "1321312312312";//document.querySelector("#codeDesc").value;

    // let cs_code = "bvnvbnvbnvnv";//document.querySelector("#code").value;

    // let cs_output = "hkjhkhjkhjk";//document.querySelector("#output").value;

    const c = new CodeSnippet(cs_snippetTitle, cs_codeTitle, cs_language, cs_desc, cs_code, cs_output);

    const tableOfContentElement = document.querySelector(".tableOfContents");

    tableOfContentElement.insertAdjacentHTML("afterbegin", c.getCodeEntry());

    pushCodeSnippet(c);
}

export const deleteSnippetBtnHandler = (e) =>
{
    deleteSnippet();
}

//Done//
export const copySnippetBtnHandler = (e) =>
{
    let code = document.querySelector(".codeSnippet").textContent;
    //console.log(code);

    navigator.clipboard.writeText(code);
    alert("Code Copied");
}

//Done//
export const editSnippetBtnHandler = (e) =>
{
    e.preventDefault();
    let sectIndex = clickedId;

    //Code Snippet Section View///
    // const section = e.target.closest(".codeSection");
    // console.log(section.dataset.id);

    document.querySelector("#snippetTitleInput").value = codeSnippetList[sectIndex].getSnippetTitle();

    document.querySelector("#langInput").value = codeSnippetList[sectIndex].getCodeLangauge();

    document.querySelector("#codeTitleInput").value = codeSnippetList[sectIndex].getCodeTitle();

    document.querySelector("#codeDesc").value = codeSnippetList[sectIndex].getCodeDesc();

    document.querySelector("#code").value = codeSnippetList[sectIndex].getCodeSnipp();
    
    document.querySelector("#output").value = codeSnippetList[sectIndex].getCodeOutput();
}

//codeSnippetForm//
export const saveButtonHandler = (e) => 
{
    let cs_snippetTitle = "asddsadads";//document.querySelector("#snippetTitleInput").value;

    let cs_codeTitle = "zxczczxczczasdasdasdasdasasdasddssad";//document.querySelector("#codeTitleInput").value;

    let cs_language = "qwewqeqew";//document.querySelector("#langInput").value;

    let cs_desc = "Officia aute ea anim consequat nostrud ipsum duis eu minim labore labore est cupidatat. Incididunt non proident aliqua sint irure reprehenderit. Officia mollit sunt cupidatat anim. Aliquip mollit pariatur occaecat velit. Occaecat occaecat qui aliqua reprehenderit labore magna quis occaecat irure nisi. Veniam consequat ad labore voluptate laboris.";//document.querySelector("#codeDesc").value;

    let cs_code = "bvnvbnvbnvnv";//document.querySelector("#code").value;

    let cs_output = "hkjhkhjkhjk";//document.querySelector("#output").value;

    const c = new CodeSnippet(cs_snippetTitle, cs_codeTitle, cs_language, cs_desc, cs_code, cs_output);


    const tableOfContentElement = document.querySelector(".tableOfContents");

    //Will need to edit this a bit
    tableOfContentElement.insertAdjacentHTML("afterbegin", c.getCodeEntry());

    pushCodeSnippet(c);
    console.log(c);
}

//Done
export const tableOfContentsHandler = (e) =>
{
    e.preventDefault();

    //Code Snippet Section View///
    const section = e.target.closest(".codeSection");

    if (!section)
    {
        return;
    }

    //Hide The 
    //Hide the Roll Description and Roll Edit Buttons
    //Reveal Elements to put the .roll div into edit mode        
    // d.querySelector(".rollDesc").style.display = "none";
    // d.querySelector(".rollEditBtns").style.display = "none";
    // d.querySelector(".editRollDiv").style.display = "flex";

    
    let sectIndex = section.dataset.id;
    // console.log(sectIndex);

    //Viewing the CodeSnippet aka elements on the toc//
    document.querySelector(".langDiv").innerHTML = codeSnippetList[sectIndex].getCodeLangauge();

    document.querySelector(".codeSnippetTitle").textContent = codeSnippetList[sectIndex].getSnippetTitle();

    document.querySelector(".codeSnippetDesc").textContent = codeSnippetList[sectIndex].getCodeDesc();
    
    document.querySelector(".codeItselfTitle").textContent = codeSnippetList[sectIndex].getCodeTitle();

    document.querySelector(".codeSnippet").textContent = codeSnippetList[sectIndex].getCodeSnipp();


    //Updating Clicked Id/table of content element//
    setClickedId(sectIndex);
}
