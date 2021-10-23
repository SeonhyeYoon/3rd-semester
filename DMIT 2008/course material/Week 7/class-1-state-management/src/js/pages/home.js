import directory from './../components/cards/directory'
 
 
const index = function(){
    const page = document.createElement('div')  
    page.append(directory())
    return page
}

export default index