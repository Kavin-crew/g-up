import { useState } from "react";
import { IoMdEye , IoMdEyeOff  } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
const RegisterCard = ({setIsOpen ,setIsLogin}) => {

const [TogglePass, setTogglePass] = useState(false)
const [UserName, setUserName] = useState('')
const [UserEmail, setUserEmail] = useState('')
const [UserPhone, setUserPhone] = useState('')
const [UserPass, setUserPass] = useState('')
const [UserConfirmPass, setUserConfirmPass] = useState('')

const toggleShow = ()=>{
    setTogglePass(!TogglePass)
}

const handleSubmit =(e)=>{
    e.preventDefault();
    console.warn(`Name: ${UserName}`)
    console.warn(`Email: ${UserEmail}`)
    console.warn(`Phone: ${UserPhone}`)
    console.warn(`Password: ${UserPass}`)
    console.warn(`Confirm Password: ${UserConfirmPass}`)
}



    const isClose =()=>{
        setIsOpen(false)
    }

    const gotoRegister =()=>{
        setIsLogin(true)

    }

    return (
        <div className="modal__card modal__card-register">
        <div className="modal__card__cont modal__card__cont-register">
        <span className="modal__card__cont__close" onClick={isClose}>X</span>
                  <h2>Create Account</h2>
              
                <form className="modal__form" onSubmit={handleSubmit}>

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <img src='images/icons/form-user-icon.png' alt="Email Icon" /></figure>
                        <input type="text" placeholder="Full Name" value={UserName} onChange={e=> setUserName(e.target.value)}/>
                    </div>
                    
                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <img src='images/icons/form-mail-icon.png' alt="Email Icon" /></figure>
                        <input type="text" placeholder="Email Address"  value={UserEmail} onChange={e=> setUserEmail(e.target.value)}/>
                    </div>

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <MdOutlinePhoneAndroid size='2.1rem' color="#9D9D9D" /></figure>
                        <input type="text" placeholder="Phone Number" value={UserPhone} onChange={e=> setUserPhone(e.target.value)}/>
                    </div>

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <img src='images/icons/form-key-icon.png' alt="Email Icon" /></figure>
                    <input type={!TogglePass ? 'password' : 'text'}  value={UserPass} onChange={e=>setUserPass(e.target.value)} placeholder="Password"/>
                        <figure className="modal__form__input__icon" onClick={toggleShow}> {!TogglePass ? <IoMdEye size='2.5rem' color="#C5C5C5" /> : <IoMdEyeOff size='2.5rem' color="#C5C5C5" />} </figure>
                    </div>

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <img src='images/icons/form-key-icon.png' alt="Email Icon" /></figure>
                        <input type="password" placeholder="Confirm Password" value={UserConfirmPass} onChange={e=>setUserConfirmPass(e.target.value)} />
                         
                    </div>


                    <button className="modal__form__btn btn-secondary">
                    Login
                    </button>
                    <p className="u-margin-top-xs">Already have an account? <a onClick={()=>gotoRegister()} className="a-btn">Log in</a></p>
                </form>
                <div className="thirdparty__card">
                <section className="thirdparty__card__or">
                   or
                </section>

            <div className="thirdparty__card__btncon">
                <button className="thirdparty__btn thirdparty__btn--google">
                    <figure className="thirdparty__btn__icon"><img src='images/icons/form-gmail-icon.png' alt="Email Icon" /></figure>
                    Sign Up With Google
                </button>
                <button className="thirdparty__btn thirdparty__btn--facebook">
                <figure className="thirdparty__btn__icon"><img src='images/icons/form-fb-icon.png' alt="Email Icon" /></figure>
                Sign Up With Facebook
                </button>
            </div>

            </div>

                </div>

                <div className="modal__card__bg modal__card__bg-register">
                <h2 className="logo">g.up</h2>
                    <h3>Additional business details will be uploaded.</h3>

                    <figure className="modal__card__bg__img"><img src="images/sigup-img.png" alt="" /></figure>
                </div>
                
        </div>
    );
}

export default RegisterCard;
