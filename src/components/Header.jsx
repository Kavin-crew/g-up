import { Link, NavLink } from 'react-router-dom';

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
            <button className="btn btn--primary">Report a Number</button>
        </header>
    );
}

export default Header;
