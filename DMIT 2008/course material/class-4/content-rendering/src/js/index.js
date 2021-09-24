 import { dataFetcher } from "./utils/dataFetcher.js";
 import userTemplate from "./templates/userTemplate.js";
 import render from "./utils/render.js";

 const appInit = async function (){
    const root = document.querySelector('#app');

    // app init
    const userData = await dataFetcher('https://jsonplaceholder.typicode.com/users/1')
    //construct  the DOM content Templating

    const elem = render(userTemplate, userData)

    root.append(elem);
 }

 appInit();