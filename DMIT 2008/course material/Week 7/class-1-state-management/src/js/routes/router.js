import home  from "./../pages/home";
 

/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/

const routes = {
    "/": home()
}

const Router =  function (pathname)   {

     // check the pathname agains the router object
     // if path is valid display the component page
     // if not display the not found page.
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
         app.appendChild(routes[window.location.pathname])
    

}



 
export { Router}