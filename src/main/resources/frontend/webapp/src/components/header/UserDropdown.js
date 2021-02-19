import React, {useState} from "react";
import {AdminItems} from "../../data/AdminItems";
import AuthService from "../../services/AuthService";
import {UserItems} from "../../data/UserItems";

function UserDropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const logout = () => {
        AuthService.logout();
        setClick(false);
    }

    return(
        <ul
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked-handing' : 'dropdown-menu-handing'}
        >
            {UserItems.map((item, index) => {
                if(item.title == "Logout") {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.path} onClick={logout}>
                                {item.title}
                            </a>
                        </li>
                    );
                }
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
export default UserDropdown;