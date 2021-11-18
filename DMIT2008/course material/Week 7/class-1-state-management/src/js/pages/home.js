import reducers from '../redux/reducers'
import directory from './../components/cards/directory'
import button from './../components/ui/button'
 
const index = function(){
    const page = document.createElement('div')
    const removeButton = button('remove Item'); 
    page.append(directory())
    page.append(removeButton);
    removeButton.addEventListener('click', function(){
        const action = {type:"delete"}
        const payload = {id:1}

        const temp = reducers({action, payload});
        console.log(temp);
    })
    
    return page
}

export default index