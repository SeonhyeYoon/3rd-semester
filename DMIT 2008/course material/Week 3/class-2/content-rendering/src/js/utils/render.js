import makeElement from "./makeElement.js";

/*
  templtae, data
  template function userTemplate
  data single user

  return template literal (we convert to markup)
*/

const render = function (template, data) {
  const templateStringLiteral = template(data);
  // convert the template literal to markup
  // template display add to the view
  // insertAdjacentHTML
  const markup = makeElement(templateStringLiteral);
  
  return markup;
}

export default render;