import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


function ProfileDropdown(){

    const {auth} = useAuth();
    const {userDetails} = auth;
    return (<>
    
        <div className="sample profiledropdown">
            {console.log(userDetails)}
            <h2 className="profiledropdown_user">{userDetails?.user?.firstName} {userDetails?.user?.lastName}</h2>

            <ul>
                <li><h3>User Settings</h3></li>
                <li>
                    
                    <Link to="/faqs">
                    
                    Help</Link></li>
                <li>Logout</li>
            </ul>
        </div>
    </>)

}

export default ProfileDropdown;