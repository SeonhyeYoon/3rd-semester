import makeElement from "../utils/makeElement"
import directory from "../components/cards/directory"
import employee from "../components/cards/employee"
import { getStore } from "../redux/store"
import {Router} from "./../routes/router"
 

const employeeDirectory = function(){
    const employeeList = getStore()
    const page = document.createElement('div')
    const container = directory(); 

    // EVENT HANDLER FUNCTION FOR REMOVING AN EMPLOYEE 
    function onDeleteEmployee (e){
      // pass the id or the employee throught as data
      // delete id
      // passing single piece of data {id:12}
      // group of data array of object [{}, {}, {}]
      // map filter reduce Browser V8 speed
      // Object Object.keys ===> array map filter reduce
      const employeeId = {id:e.currentTarget.dataset.key}
      Router('/delete', employeeId);
    }

    // RENDER FUNCTION
    function render(){ 
      const ul = container.querySelector('ul')
      // creating the emply cards from data
      const elements = employeeList.map(emp => employee(emp))
      // looping emp li adding the
      // add event listeners for any additional elements
      elements.forEach(element=> {    
        element.querySelector('#delete').addEventListener('click', onDeleteEmployee)   
        ul.append(element)
      })
      page.append(container)
 }
  
    if(employeeList !== null){
      render()
    }

    return page
}

export default employeeDirectory


 