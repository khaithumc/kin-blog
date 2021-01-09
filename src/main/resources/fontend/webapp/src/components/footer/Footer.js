import React from "react";
import '../../css/Footer.css'

function Footer() {
    return (
       <nav className={'NavFooter'}>
           <ul className={'IconFooter'}>
               <li className={'Icon'}>
                   <a href={'/'} className={'IconLink'}><i className="fab fa-facebook"></i></a>
               </li>
               <li className={'Icon'}>
                   <a href={'/'} className={'IconLink'}><i className="fab fa-twitter"></i></a>
               </li>
               <li className={'Icon'}>
                   <a href={'/'} className={'IconLink'}><i className="fab fa-pinterest-square"></i></a>
               </li>
               <li className={'Icon'}>
                   <a href={'/'} className={'IconLink'}><i className="fab fa-instagram"></i></a>
               </li>
               <li className={'Icon'}>
                   <a href={'/'} className={'IconLink'}><i className="fab fa-youtube"></i></a>
               </li>
           </ul>
       </nav>
    );
}
export default Footer;