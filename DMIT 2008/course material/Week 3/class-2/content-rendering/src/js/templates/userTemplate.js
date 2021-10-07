/*
    userData model data structure any give user.

    Array Destructing
    userModel = {
      id, 
      name,
      phoneNumber,
      website
    }

    Object Destructing
    cont obj = {
      id, name
    }
    const {id, name} = {...obj}
 */

// Array Destructing
const userTemplate = function(userData={}){
  const template =
  `
    <ul class="user">
      <li>id: ${userData.id}</li>
      <li>name: ${userData.name}</li>
      <li>phone number: ${userData.phone}</li>
      <li>website: ${userData.website}</li>
    </ul>
  `
  return template;
}

// Object Destructing
/*
  const userTemplate = function({id, name, phone, website}){
  const template =
  `
    <ul class="user">
      <li>id: ${id}</li>
      <li>name: ${name}</li>
      <li>phone number: ${phone}</li>
      <li>website: ${website}</li>
    </ul>
  `
  return template;
*/

export default userTemplate