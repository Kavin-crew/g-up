import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function ProfileDropdown() {
    const { auth } = useAuth();
    const { userDetails } = auth;
    return (
        <>
            <div className="sample profiledropdown">
                {console.log(userDetails)}
                <h2 className="profiledropdown_user">
                    {userDetails?.user?.firstName} {userDetails?.user?.lastName}
                </h2>

                <ul>
                    <li className="settings">
                        <img src="images/icons/settings.png" alt="settings" />
                        <h3>User Settings</h3>
                    </li>
                    <li className="help">
                        <img src="images/icons/help.png" alt="help" />
                        <Link to="/faqs"> Help</Link>
                    </li>
                    <li className="logout">
                        <img src="images/icons/logout.png" alt="logout" />
                        Logout
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ProfileDropdown;
