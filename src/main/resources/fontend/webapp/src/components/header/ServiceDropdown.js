import React, { useState } from 'react';
import { ServiceItems } from '../../data/ServiceItems';
import '../../css/Dropdown.css';
import { Link } from 'react-router-dom';

function ServiceDropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked-handing' : 'dropdown-menu-handing'}
            >
                {ServiceItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
    );
}
export default ServiceDropdown;