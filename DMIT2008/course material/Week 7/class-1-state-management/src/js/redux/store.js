let store = null;

// Create the store accessed by all our app components
function createStore (data=[]){
  if(store == null){
    store = [...data]
  };
  return null;
}

function getStore () {
  return store;
}

export {createStore, getStore}

/*
function copm (){
  // component level state
  const name =  12;
}
*/