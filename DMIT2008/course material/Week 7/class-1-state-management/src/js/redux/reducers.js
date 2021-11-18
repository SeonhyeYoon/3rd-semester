import {getStore} from './store'
/*
    Reducer
    action: what do you want to do on the store
        action.type = "delete"
        action.type = "edit"
        action.type = "create"
      delete: remove a employee
      edit: edits an existing employee
      add: add a new employee
    payload data for that action object
      {object}
*/

function reducers ({action, payload, ...rest}){
  switch (action.type){
    case "edit": 
      return "edit employee";
    case "delete":
      return "remove employee with an id";
    case "add":
      return "create a new employee";
      default:
        return store;
  }

}

export default reducers;