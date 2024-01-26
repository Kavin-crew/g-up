import { useState } from "react";
import { IoMdEye ,IoMdEyeOff  } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
const LoginCard = ({setIsOpen , setIsLogin}) => {

const [TogglePass, setTogglePass] = useState(false)
const [UserPhone, setUserPhone] = useState('')
const [UserPass, setUserPass] = useState('')

const toggleShow = ()=>{
    setTogglePass(!TogglePass)
}

const handleSubmit = async (e)=>{
    e.preventDefault();
    console.warn(`Phone: ${UserPhone}`)
    console.warn(`Password: ${UserPass}`)


    try {
        const res = await fetch("https://g-up-api.up.railway.app/api/v1/users/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            "email": "kevinwebsterr2016@gmail.com",
            "password": "09277469949"
          }),
        });

        console.log(res)


      } catch (error) {
        console.log(error)
      }





}

const isClose =()=>{
    setIsOpen(false)
}

const gotoRegister =()=>{
    setIsLogin(false)

}



    return (
        <div className="modal__card modal__card-login">
        <div className="modal__card__cont modal__card__cont-login">
        <span className="modal__card__cont__close" onClick={isClose}>X</span>

                 <h2>Welcome back!</h2>
                <p>Please enter your details</p>
                <form className="modal__form" onSubmit={handleSubmit}>

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <MdOutlinePhoneAndroid size='2.1rem' color="#9D9D9D" /></figure>
                        <input type="text" placeholder="Phone Number" value={UserPhone} onChange={e=>setUserPhone(e.target.value)}/>
                        <div className="line"></div>
                    </div>

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <img src='images/icons/form-key-icon.png' alt="Key Icon" /></figure>
                        <input type={!TogglePass ? 'password' : 'text'} value={UserPass} onChange={e=>setUserPass(e.target.value)} placeholder="Password"/>
                        <div className="line"></div>
                    <figure className="modal__form__input__icon pointer" onClick={toggleShow}> {!TogglePass ? <IoMdEye size='2.5rem' color="#C5C5C5" /> : <IoMdEyeOff size='2.5rem' color="#C5C5C5" />} </figure>
                    </div>

                    <div className="modal__form__info">

                        <div className="modal__form__info__remeberme">
                            <input type="checkbox" name="" id="" />
                            <p>Remember me</p>
                        </div>

                        <div className="modal__form__info__forgotpass">
                            <a href="#" className="a-btn">Forgot Password?</a>
                        </div>
                    </div>

                    <button className="modal__form__btn btn-secondary">
                    Login
                    </button>
                    <p className="u-margin-top-xs">Don’t have an account? <a className="a-btn" onClick={()=>gotoRegister()}>Create one!</a></p>
                </form>

                <div className="thirdparty__card">
                <section className="thirdparty__card__or">
                   or
                </section>

            <div className="thirdparty__card__btncon">
                <button className="thirdparty__btn thirdparty__btn--google">
                <figure className="thirdparty__btn__icon"><img src='images/icons/form-gmail-icon.png' alt="Email Icon" /></figure>
                    Sign In With Google
                </button>
                <button className="thirdparty__btn thirdparty__btn--facebook">
                <figure className="thirdparty__btn__icon"><img src='images/icons/form-fb-icon.png' alt="Email Icon" /></figure>
                Sign In With Facebook
                </button>
            </div>

            </div>

                </div>

                <div className="modal__card__bg modal__card__bg-login">
                    <h2 className="logo">g.up</h2>
                    <h3>Additional business details will be uploaded.</h3>
                    <figure className="modal__card__bg__img"><img src="images/login-img.png" alt="" /></figure>
                </div>
                
        </div>
    );
}

export default LoginCard;
