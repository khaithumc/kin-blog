import React, { useState } from 'react';
import '../../css/NavigationBar.css';
import ServiceDropdown from './ServiceDropdown';
import {Button, Form, FormControl} from "react-bootstrap";
import AdminDropdown from "./AdminDropdown";


function NavigationBar() {

    const [click, setClick] = useState(false);
    const [serviceDropdown, setServiceDropdown] = useState(false);
    const [adminDropdown, setAdminDropdown] = useState(false);
    const [searchDropdown, setSearchDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnterService = () => {
        if (window.innerWidth < 960) {
            setServiceDropdown(false);
        } else {
            setServiceDropdown(true);
        }
    };

    const onMouseLeaveService = () => {
        if (window.innerWidth < 960) {
            setServiceDropdown(false);
        } else {
            setServiceDropdown(false);
        }
    };

    const onMouseEnterAdmin = () => {
        if (window.innerWidth < 960) {
            setAdminDropdown(false);
        } else {
            setAdminDropdown(true);
        }
    };

    const onMouseLeaveAdmin = () => {
        if (window.innerWidth < 960) {
            setAdminDropdown(false);
        } else {
            setAdminDropdown(false);
        }
    };

    const onMouseEnterSearch = () => {
        setSearchDropdown(true);
    }

    const onMouseLeaveSearch = () => {
        setSearchDropdown(false);
    }

    return (
        <nav className={'navbar-handing'}>
            <a href='/' className='navbar-logo-handing' onClick={closeMobileMenu}>
                <h1>Fake <i className="fas fa-grin-squint-tears"></i> News </h1>
            </a>
            <div className={'menu-icon-handing'} onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item-handing'>
                    <a href={'/'} className={'nav-links-handing'} onClick={closeMobileMenu}>
                        Home
                    </a>
                </li>
                <li className='nav-item-handing' onMouseEnter={onMouseEnterService} onMouseLeave={onMouseLeaveService}>
                    <a href={'/services'} className={'nav-links-handing'} onClick={closeMobileMenu}>
                        Services <i className={'fas fa-caret-down'} />
                    </a>
                    {serviceDropdown && <ServiceDropdown />}
                </li>

                <li className='nav-item-handing' onMouseEnter={onMouseEnterAdmin} onMouseLeave={onMouseLeaveAdmin}>
                    <a href={'/admin'} className={'nav-links-handing'} onClick={closeMobileMenu}>
                        Admin <i className={'fas fa-caret-down'} />
                    </a>
                    {adminDropdown && <AdminDropdown/>}
                </li>

                <li className={'nav-item-handing'} onMouseEnter={onMouseEnterSearch} onMouseLeave={onMouseLeaveSearch}>
                    <a href='/search' className='nav-links-handing' onClick={closeMobileMenu}>
                        <i className={'fas fa-search'}/>
                    </a>
                    {searchDropdown &&
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    }
                </li>

                <li className={'nav-item-handing'}>
                    <Button href={'/login'}>
                        Sign In
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;