import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <Link to={'/'}>
                    <h2 className="logo">G-Up</h2>
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list_item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav__list_item">
                            <NavLink to="/categories">Categories</NavLink>
                        </li>
                        <li className="nav__list_item">
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav__list_item">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
                <Link to={'/reportanumber'} className="btn btn-primary">
                    Report a Number
                </Link>
            </div>
        </header>
    );
}

export default Header;
