import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from './LoginComponent/LoginModal'


function Header() {

    const [IsOpen, setIsOpen] = useState(false);
    const [IsLogin , setIsLogin] = useState(true)
    
    const isLogin = (status) =>{
        setIsOpen(!IsOpen)
        setIsLogin(status)
    }


    return (
        <>
          { IsOpen &&   <LoginModal setIsOpen={setIsOpen} IsLogin={IsLogin} setIsLogin={setIsLogin} />}
 
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
                    {/* <Link to={'/login'} className="btn btn-transparent"> */}
                      <button className="btn btn-transparent" onClick={()=>isLogin(true)}>
                      Login
                      </button>
                    {/* </Link> */}
                    {/* <Link to={'/register'} className="btn btn-secondary"> */}
                    <button className="btn btn-secondary" onClick={()=>isLogin(false)}>
                        Get Started
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;
