import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <Link to={'/'}>
                    <h2 className="logo">g.up</h2>
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list_item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav__list_item">
                            <NavLink to="/search">Search</NavLink>
                        </li>
                        <li className="nav__list_item">
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="header_info">
                    <Link to={'/login'} className="btn btn-transparent">
                        Login
                    </Link>
                    <Link to={'/register'} className="btn btn-secondary">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
