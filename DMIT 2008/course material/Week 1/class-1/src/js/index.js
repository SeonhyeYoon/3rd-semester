/*
    CPSC1520
    -function
    -arrays map, filter reduce
    -objects
    -fetch
    -promises

      Client
      => get Data(UI) => parse(markup) => render(data+markup) => view
      https://jsonplaceholder.typicode.com/users
                                           endpoint
*/
// single source of truth
let store = [];

const url = 'https://jsonplaceholder.typicode.com/users?id=4'

// fetch the data from the api
// callback promise async/await
/*
    Promise Asyn
    new Promise ((resolve, reject)=>{
      // code
    })
          resolve
          reject
*/

fetch(url)
.then(res=> res.json())
.then(data => {
  // updating the global state with the data
  store = [...data]
  render(data)  
})
const render = function (theData) {
  const dataItem = theData[0]
  const template = `
    <ul>
      <li>Name: ${dataItem.name}</li>
      <li>UserName: ${dataItem.username}</li>
      <li>Phone: ${dataItem.phone}</li>
    </ul>
  `
  document.body.innerHTML = template;
  
}
/*
let store = [];

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(res=> res.json())
.then(data=> {
  console.log(data)
  store = [...data]
  configUI(data)
})
.catch(err=> console.log(err))

const configUI = function (data){
  const temp = (data[0]);
  // temp marry data render
  const template = `
    <ul>
      <li>${temp.name}</li>
      <li>${temp.email}</li>
      <li>${temp.id}</li>
    </ul>
  `

  document.body.innerHTML = template;
}
*/

// ()=> :implicit return
// ()=>{}: explicit return