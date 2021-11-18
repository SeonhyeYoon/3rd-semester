import levelHeading from '../components/ui/levelHeading'
import link from './../components/ui/link'

/*
    Combine Our Components
*/

const homePage = function(){
  const header = document.createElement('header');
  header.classList.add('ui-page-header');
  const h1 = levelHeading('h1', 'Home Page');
  const linkElm = link('login', '/login');
  header.append(h1);
  header.append(linkElm);

  return header;
}

export default homePage;