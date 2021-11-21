import makeElement from "../../utils/makeElement";

const employee = function ({id,name,department,phone,email}) {
  const template = `       
  <li class="employee" data-key="${id}">
     <p>${department}</p>
     <p> ${name} </p>
     <p>email: ${email}</p>
     <p>phone: ${phone}</p> 
     <p class="controls">
      <button id="editEmployee">edit</button>
      <button id="deleteEmployee">delete</button>
     </p>      
  </li>        
  `;
  return makeElement(template)
};

export default employee;