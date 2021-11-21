import {getStore} from './store'



function reducer ( action){
    console.log(action);
    switch(action.type){
        case "delete":
        console.log(action.payload.id);
        action.cb()
        case "edit": return "edit employee";
        case "add": return "create a new employee";
        default: return store
    }

}


export default reducer