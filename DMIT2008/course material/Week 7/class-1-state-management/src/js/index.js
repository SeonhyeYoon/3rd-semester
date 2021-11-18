import {Router} from "./routes/router";
import { createStore, getStore } from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from "./utils/key";

const app = document.querySelector("#app");
Router(window.location.pathname)

const onAppInit = async function(e){
  let employees = await dataFetcher('./data/employees.json');

  // DEMO IF THE DATA DOESN'T HAVE SOME UNIQUE KEY
  if(employees[0].id === undefined){
    // add a unique id
    // import module adds id to data return the data array
    // with id's
    employees = [...keyGenerator(employees)];
  }

  createStore(employees);
  console.log(getStore());
}

window.addEventListener('load', onAppInit)




 
 

 