# Homework 6

**Web 4 link:** https://in-info-web4.luddy.indianapolis.iu.edu/~jasoluu/n315/homework7/dist/

## Overview
This project makes the login page from the Jungle Cook prototype work with Firebase Authentication. Users can create an account and sign in with an email and password, and the navigation updates when a user is logged in.

## Features
- Login page built from the Jungle Cook prototype, responsive across all screen sizes
- Working desktop navigation and mobile (hamburger) menu
- Sign up with email and password using Firebase Authentication
- Sign in and sign out with email and password
- Navigation updates based on login state and stays correct after a page refresh

## Built With
- HTML, SCSS, JavaScript
- Vite
- Firebase Authentication

## Running Locally
1. Clone the repo and open the `homework7/homework7` folder
2. Run `npm install`
3. Create a `.env` file in the project root with your Firebase config values (see `src/firebase.js` for the variable names)
4. Run `npm run dev`
