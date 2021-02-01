import React, { useState } from 'react';
import {AdminItems} from '../../data/AdminItems';
import '../../css/Dropdown.css';

function AdminDropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <ul
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked-handing' : 'dropdown-menu-handing'}
        >
            {AdminItems.map((item, index) => {
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
export default AdminDropdown;