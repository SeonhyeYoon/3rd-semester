import landingPage from './pages/landing.js';
import landing from './pages/landing.js';

const app = document.querySelector('#app');

app.appendChild(landing())

/*
   Method 1:
   Template Strings of Markup (valid)
      means not going make the content interactive...
      add to the DOM, Read Back out of the dom, add your listenters insert back in...
   
   inject the template literal string
      - innerHTML
         : rerenders the page whole pages...
      - insertAdjacentHTML()
         : render the element that HTML is injected into...
*/

/*
   Method 2:
   Templating using Elments Node (render)
    button template string ====> element node using the #document frag...
    li interactive---->element node----> add interactivity
*/

/*
   app is where were going to inject our views
   - home page - js
   - todo page - js

   - Navigate between pages a element
   Routing way to navigate between js files...
   Build a simple router
*/

   /*
      UI BUTTON
      Parameters
      Title
      Style
   */