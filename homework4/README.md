

Readme · MD
# Homework 4 – User Feedback & Notifications
 
**Jason Luu** · N315 · IU Indianapolis
 
A single-page website that demonstrates user feedback through a reusable toast notification system, hash-based page routing, and a validated login modal.
 
## Links
 
- **Live site (Web 4):** https://in-info-web4.luddy.indianapolis.iu.edu/~jasoluu/n315/homework4/
## Assignment Requirements
 
| Requirement | Where it's implemented |
| --- | --- |
| Reusable toast/alert utility | `showToast(message, type)` in `src/utility.js` |
| CSS for each message type | `.toast--success`, `.toast--error`, `.toast--info`, `.toast--loading` in `css/styles.css` |
| At least two pages using routing | Hash routing in `src/app.js` and `src/model.js`; page content in `pages/` |
| Login/Sign In button that opens a form | Login button in the nav opens the modal in `index.html` |
| Login form validation | Submit handler in `initLogin()` in `src/app.js` |
| Error notification on failed validation | Error toast explaining what to fix |
| Success notification on sign in | "You have successfully signed in!" success toast |
| Additional user feedback | **Load Data** button on the Home page shows a loading toast, then the data and a success toast. Logging out shows an info toast. |
 
## Features
 
### Toast Notifications
 
Call `showToast()` from any file that imports it:
 
```js
import { showToast } from "./utility.js";
 
showToast("Data Loaded Successfully", "success");
showToast("Please enter your email address.", "error");
showToast("You have successfully logged out", "info");
showToast("Loading Data...", "loading");
```
 
The type defaults to `"info"` if none is given. Each toast slides in, stays for 3 seconds, then animates out and removes itself from the page.
 
| Type | Use | Accent color |
| --- | --- | --- |
| `success` | Something completed | Green |
| `error` | Something went wrong or needs fixing | Red |
| `info` | General information | Blue |
| `loading` | Waiting on a process | Orange |
 
### Login Validation
 
Inputs are trimmed of leading and trailing spaces before they are checked. The form will not submit until all of these pass:
 
- Email is not empty
- Email is at least 5 characters
- Email contains an `@`
- Password is not empty
- Password is at least 6 characters
Each failed check shows its own error toast describing what to correct.
 
## Project Structure
 
```
homework4/
├── index.html
├── package.json
├── css/
│   └── styles.css
├── images/
├── video/
├── pages/
│   ├── home.js
│   ├── secret.js
│   └── secretPage.js
└── src/
    ├── app.js        # Routing, page listeners, login logic
    ├── model.js      # Loads page content into #app
    └── utility.js    # showToast() notification utility
```
 
## Running Locally
 
The site uses JavaScript modules, so it has to be served over `http://` instead of opened directly as a file.
 
**Option 1:** Open the folder in VS Code and use **Open with Live Server** on `index.html`.
 
**Option 2:** Install dependencies and run the serve script:
 
```bash
npm install
npm run serve
```
 
## Technologies
 
- HTML5
- CSS3 (flexbox, keyframe animations)
- JavaScript (ES modules)
- live-server
