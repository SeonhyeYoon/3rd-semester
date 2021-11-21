import makeElement from "../../utils/makeElement";


/* 
    I always put the date-key${id} on the parent element
    For the buttons you can put it directly on them or
    on the parent elemet. Wherever you find it easiets
    to acceess the unique key.(id is the unique key)
*/

const employee = function ({id,name,department,phone,email}) {
  const template = `       
  <li class="employee" data-key="${id}">
     <p>${department}</p>
     <p> ${name} </p>
     <p>email: ${email}</p>
     <p>phone: ${phone}</p> 
     <p class="controls" data-key="${id}">
       <button id="delete" data-key="${id}">delete</button>
       <button id="edit" data-key="${id}">edit</button>
     </p>      
  </li>        
  `;
  return makeElement(template)
};

export default employee;
