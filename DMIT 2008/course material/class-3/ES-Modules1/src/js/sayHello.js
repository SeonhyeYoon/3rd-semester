// strict mode: 사용시 named function이 선언하기 전에 호출 불가능해짐: 'use-strict'
// Module can only export one default
// have many export
// arrow function
const sayHello = ()=>{
  // explicit return
  return 'say hello'
}

const sayGoodBye = () =>{
  return 'goodbye'
}

export default sayHello
export {sayGoodBye}


// require('fs/promises) common.js Node.js (ES Module)

/*
// implicit return
const jimo = ()=> <div></div>

// function declaration
const temp = function (){
  
}

//named function은 호출을 함수 선언보다 먼저 해도 가능.
namedFunc()
// name function 
function namedFunc(){

}
*/