import { useState } from "react";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";

const LoginModal = ({setIsOpen , IsLogin , setIsLogin}) => {

    const isClose =()=>{
        setIsOpen(false)
    }

    return (
        <>
        <div className="modal" >
            <div className="modal__backdrop" onClick={isClose}></div>
            <div className="wrapper">
           <div className="modal__con">
         
           {IsLogin ?  
              <LoginCard setIsOpen={setIsOpen} setIsLogin={setIsLogin} />  : 
              <RegisterCard setIsOpen={setIsOpen} setIsLogin={setIsLogin}/>}


           
           
           </div>
            </div>
        </div>
            
        </>
    );
}

export default LoginModal;
