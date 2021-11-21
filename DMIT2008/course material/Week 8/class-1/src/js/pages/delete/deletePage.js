import makeElement from "~/src/js/utils/makeElement";
import button from "~src/js/components/ui/button";
import { Router } from "../../routes/router";
import reducer from "../../redux/reducers";

const deletePage = function(props){
    const page = document.createElement('div');
    const cancelButton = button("cancel", 'buttonwarning');
    const deleteButton = button("delete");

    // Event Handler Function
    function onDeleteEmployee (e) {
      // action object required for the reducer
      console.log(props);
      const action = {
        type: "delete",
        payload: {id:props},
        cb: ()=>{
            Router('/directory')
        }
      }
      // pass the action object to the reducer
      reducer(action);
    }
    // delete button event handler
    deleteButton.addEventListener('click', onDeleteEmployee)
    let headerTemplate = `
    <header class="welcome center-in-page">
      <h1>Delete Employee</h1>
      <p>delete employee with id</p>
      <div></div>
    </header>
    `
    const pageHeader = makeElement(headerTemplate);
    pageHeader.querySelector('div').append(cancelButton, deleteButton);
    page.append(pageHeader);

    return page;
}

export default deletePage;