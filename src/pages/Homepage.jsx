import { NavLink } from 'react-router-dom';

function Homepage() {
    return (
        <>
            <header className="header">
                <h2 className="comp_name">G-Up</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="categories">Categories</NavLink>
                        </li>
                        <li>
                            <NavLink to="blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="btn btn--primary">Report a Number</button>
            </header>
            <section className="banner">
                <h1 className="heading--primary">Profile</h1>
            </section>
            <main className="main">
                <p heading--primary>Main Area Here</p>
            </main>
            <footer className="footer">
                <p>Copyright &copy; {new Date().getFullYear} G-UP. All rights reserved.</p>

                <ul className="social_list">
                    <li className="social_item">
                        <p>Logo</p>
                    </li>
                    <li className="social_item">
                        <p>Logo</p>
                    </li>
                    <li className="social_item">
                        <p>Logo</p>
                    </li>
                    <li className="social_item">
                        <p>Logo</p>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Homepage;
