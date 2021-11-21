import home from "../pages/index"; 
import directory from "../pages/directory";
import deletePage from "../pages/delete/deletePage";
import notFound from "../pages/notFound";

// Routing Table
const routes = {
    "/": home,
    "/directory": directory,
    "/delete": deletePage
}

// Passing Data Add prarm
const Router =  function (pathname, params=null)   {
    const isValidRoute =   Object.keys(routes).find(key => key===pathname)
     
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
       
        // app.appendChild(routes[window.location.pathname]())
        if(isValidRoute === undefined){
            app.appendChild(notFound())
        }else{
            // passing properties through to the page component as params
            app.appendChild(routes[isValidRoute]( params)) 
        }   

}



 
export { Router}