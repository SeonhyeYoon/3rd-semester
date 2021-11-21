import makeElement from "../utils/makeElement"
import directory from "../components/cards/directory"
import employee from "../components/cards/employee"
import { getStore } from "../redux/store"
import { Router } from "../routes/router"
 

const employeeDirectory = function(){
    const employeeList = getStore()
    const page = document.createElement('div')
    const container = directory() 

    //DELETE EMLOYEE HANDELER FUNCITON handleClick
    function onDeleteEmployee (e){
      // DELETE NEE THE ID
      const employeeId = e.currentTarget.parentElement.dataset.key;
      console.log(employeeId);
      // EDIT WOULD PASS EMPLOYEE OBJECT
      const employeeObject = employeeList.find(emp => emp === employeeId)

      Router('/delete', employeeId)
    }

    // RENDER FUNCTION CHANGE THE MOST
    function render(){
      if(employeeList !== null){
        // getting refer to the ul
      const ul = container.querySelector('ul')
      // creating the emply cards from data
      const elements = employeeList.map(emp => employee(emp))
      // looping emp li adding the
      elements.forEach((element) => {
        element.querySelector('#deleteEmployee').addEventListener('click', onDeleteEmployee);
        ul.append(element)
      });
      page.append(container);
    }
  }
    
    render();
    

    return page
}

export default employeeDirectory


 