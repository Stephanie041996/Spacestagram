import React from 'react'
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUndo } from '@fortawesome/free-solid-svg-icons';

const Nav = (props) =>{
    const element = <FontAwesomeIcon icon={faBars} />;
    const element2 = <FontAwesomeIcon icon={faUndo} />;
return (
    <>
       <nav>
        <a href="#top">{element}</a>
        <h4>SPACESTAGRAM</h4>
        <a href="#top">{element2}</a>
      </nav>
 
  
</>)
}
export default Nav;