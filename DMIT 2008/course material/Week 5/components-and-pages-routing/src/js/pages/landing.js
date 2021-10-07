import logo from './../icons/logo';
import header from './../components/header';
import button from './../components/button/button'
import makeElement from '../utils/makeElement';

const landingPage = function (params){

    const pageHeader = document.createElement('header');
    pageHeader.classList.add('page-header');
    pageHeader.appendChild(makeElement(logo()));
    pageHeader.appendChild(makeElement(header('Landing Page')));
    pageHeader.appendChild(makeElement(button('To Do List App')));

    return pageHeader;
}

export default landingPage