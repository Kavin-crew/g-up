import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import { Button } from '@mui/material';

function Header() {
    return (
        <header className="header">
            <Link to={'/'}>
                <h2 className="comp_name">G-Up</h2>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories">Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
            <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
                Report a Number
            </Button>
        </header>
    );
}

export default Header;
