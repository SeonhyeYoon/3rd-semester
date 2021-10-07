 import dataFetcher from "./utils/dataFetcher.js";
 
//  const temp = dataFetcher('https://jsonplaceholder.typicode.com/todos/1');

//  temp.then(data=> {
//    // you have your app data
//    data // build the dom
//  })
 
// Promises return value
// mark the function as async
// inside you can call the async operation with await...

const initApp = async function (){
  const domData = await dataFetcher('https://jsonplaceholder.typicode.com/todos/1')
  console.log(domData)
}

initApp()

 /*
 // Data Fetch

 // delay in the request for data externally
 // sending out to be removed writted updated
 // get Request getData
 // Firebase data management promises
 // send out to be written asyn task... waiting
 function asynRequest (time){
   const data = {
     name: "Seonhye",
     id: "200471229"
   }
   const num = Math.random()*10

   // firebase the functions return promise server code
   // write server return promises...
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(num>=5){
        resolve(data)
      }else {
        reject("there was an error deal with it")
      }      
    }, 1500)
   })
  //  setTimeout(()=>{
  //    return("delay is over")
  //  }, 750)
 }

 asynRequest()
 .then(data=>console.log(data))
 .catch(err=> console.log(err));
*/

 /*
 // default export the name of the module
 import sayHello from "./sayHello.js";
 import {sayGoodBye} from "./sayHello.js";

 console.log(sayHello())
 console.log(sayGoodBye())
 */