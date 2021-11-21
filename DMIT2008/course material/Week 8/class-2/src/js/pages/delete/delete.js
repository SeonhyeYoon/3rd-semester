import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from "../../routes/router"
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'

const cancelButton = button("cancel")
const deleteButton = button("delete")

//Grabbing Page Props data for the page
// employee id
const deletePage = function(props){

    const page = document.createElement('div') 

    // CANCEL DELETE EVENT HANDLER
    function onCancelDelete (e){
        Router('/directory');
    }

    // DELETE EMPLOYEE EVENT HANDLER
    function onDeleteEmployee (e){
        // Prep the data before sending to the reducer
        // get the store serach the store for the employee index position
        // the employee in the store
        // pass the payload {index:2, employee:obj}

        // EDIT
        // payload employee {}, index
        // payload: {index, employeeObjEdited}

        // ADD
        // payload={employeeObj}

        const index = getStore().findIndex((employee)=>{
            return(employee.id === props.id)
        });

        const action = {
            type:"delete",
            payload:{index},
            cb:()=>Router('/directory')
        }
        reducer(action)
    }
    
    let headerTemplate = `
        <header class="welcome center-in-page">
            <h1>Delete Employee</h1>
            <p>Remove Employee</p> 
            <div></div>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    cancelButton.addEventListener('click', onCancelDelete);
    deleteButton.addEventListener('click', onDeleteEmployee);
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)

  
    return page
    
    
}

export default deletePage