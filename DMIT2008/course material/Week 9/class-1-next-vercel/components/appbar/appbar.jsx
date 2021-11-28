import styles from './styles.module.scss'

function AppBar ({brand, company, signIn, uiStyles, ...props}){
    // Presentational Component
    // USE CLASSNAME NOT CLASS
    console.log(styles)

    return (
        <nav>
            <ul>
                <li>{brand}</li>
                <li>{company}</li>
                <li>{signIn}</li>
            </ul>
        </nav> 
    )
};

export default AppBar;

/* const AppBar = ()=> {

}
*/

/* const AppBar = function(){

}
*/