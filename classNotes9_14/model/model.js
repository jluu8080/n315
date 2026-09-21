const homePage = 
`
<h1>Welcome to the Home Page</h1>
<p>This is a paragraph</p>
`;

const aboutPage = 
`
<h1>Welcome to the About Page</h1>
<p>This is a paragraph</p>
`;

const contactPage = 
`
<h1>Welcome to the Contact Page</h1>
<p>This is a paragraph</p>
`;

const servicesPage = 
`
<h1>Welcome to the Services Page</h1>
<p>This is a paragraph</p>
`;

const pages = 
{
    home:homePage,
    about: aboutPage,
    contact: contactPage,
    services: servicesPage,
};
//These "pageNames: " MUST EXACTLY BE WHAT YOUR ID Name is!

//This is where we changes our page
export function changePage(pageName)
{
    document.querySelector('#app').innerHTML = pages[pageName];
}

//In order to make this function global, you need to make export this.
//Add the "export" keyword to the function to allow it to export
export function loadData(fName, callback)
{
    console.log(`My first name is: ${fName}`);
    let newName = fName + "Shelton";
    
    callback(newName);
}