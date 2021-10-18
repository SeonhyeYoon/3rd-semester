import homePage from "./../pages/homePage"
import loginPage from "./../pages/loginPage"
import signUpPage from "./../pages/signUpPage"
/*
    Route is a path to something ......file tor function
    key value
    route page.js ()
    pathname is one of the routes you set up......
*/
const routes = {
  "/": homePage(),
  "/login": loginPage(),
  "/signup": signUpPage()
}

const Router = (pathname) => {
  const isValidRoute = Object.keys(routes).find(ppath=>path===pathname)
  console.log(isValid)

  // loading and uploading pages into the div app
  const app = document.querySelector('#app');
  app.innerHTML = '';

  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )

  app.appendChild(routes[window.location.pathname]);
}

export default Router
export {routes}