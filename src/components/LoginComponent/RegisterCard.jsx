import { useState,useRef, useEffect } from "react";


import { IoMdEye , IoMdEyeOff  } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import {    toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegisterCard = ({setIsOpen ,setIsLogin}) => {

const [TogglePass, setTogglePass] = useState(false)

const phoneRef = useRef();
const passRef = useRef();
const errRef = useRef();


const [Fname, setFname] = useState('')
const [validFname, setValidFname] = useState(false)
const [FnameFocus, setFnameFocus] = useState(false)


const [Lname, setLname] = useState('')
const [validLname, setValidLname] = useState(false)
const [LnameFocus, setLnameFocus] = useState(false)

const [UserEmail, setUserEmail] = useState('')
const [validUserEmail, setValidUserEmail] = useState(false)
const [UserEmailFocus, setUserEmailFocus] = useState(false)


const [UserPhone, setUserPhone] = useState('')
const [validUserPhone, setValidUserPhone] = useState(false)
const [UserPhoneFocus, setUserPhoneFocus] = useState(false)


const [UserPass, setUserPass] = useState('')
const [validUserPass, setValidUserPass] = useState(false)
const [UserPassFocus, setUserPassFocus] = useState(false)

const [UserConfirmPass, setUserConfirmPass] = useState('')
const [validUserConfirmPass, setValidUserConfirmPass] = useState(false)
const [UserConfirmPassFocus,setUserConfirmPassFocus] = useState(false)

const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const NAME_REGEX = /^[A-z]{2,23}$/;
/* const NAME_REGEX = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/; */
const PHONE_REGEX = /^[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


const [errMsg,setErrMsg] = useState('')
const [success,setSucess] = useState(false)


useEffect(()=>{
    phoneRef.current.focus();
    passRef.value = ''
},[])

useEffect(()=>{
    const result = PHONE_REGEX.test(UserPhone)
    console.log(result)
    console.log(UserPhone)
    setValidUserPhone(result)
    console.log("Valid Phone: "+UserPhone)
},[UserPhone])

useEffect(()=>{
    const result = PWD_REGEX.test(UserPass)
    console.log(result)
    console.log(UserPass)
    setValidUserPass(result)

    const match = UserPass === UserConfirmPass
    setValidUserConfirmPass(match)
},[UserPass,UserConfirmPass])


useEffect(()=>{
    setErrMsg('')

},[UserPhone,UserPass,UserConfirmPass])



const toggleShow = ()=>{
    setTogglePass(!TogglePass)

}

const handleSubmit = async (e)=>{
    e.preventDefault();
    console.warn(`Name: ${Fname}`)
    console.warn(`Lname: ${Lname}`)
    console.warn(`Email: ${UserEmail}`)
    console.warn(`Phone: ${UserPhone}`)
    console.warn(`Password: ${UserPass}`)
    console.warn(`Confirm Password: ${UserConfirmPass}`)

    try {
        const res = await fetch("https://g-up-api.up.railway.app/api/v1/users/signup",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            "firstName": Fname,
            "lastName": Lname,
            "email": UserEmail,
            "phoneNumber": UserPhone,
            "password": UserPass,
            "passwordConfirm":UserPass,
          }),
        });

        console.log(res)

        if (res.ok){

        
        toast('🦄 Account Created Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      } catch (error) {
        console.log(error)
      }




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
                    <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}
                    aria-live="assertive"
                    >{errMsg}</p>


                    <div className="modal__form__input">
                        <div className="modal__form__input_fname">

                    <figure className="modal__form__input__icon"> <img src='images/icons/form-user-icon.png' alt="Email Icon" /></figure>
                        <input type="text" placeholder="First Name" value={Fname} onChange={e=> setFname(e.target.value)}/>
                        <div className="line"></div>
                        </div>

                        <div className="modal__form__input_lname">

                        <input type="text" placeholder="Last Name" value={Lname} onChange={e=> setLname(e.target.value)}/>
                        <div className="line"></div>
                        </div>
                    </div>
                    
                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <img src='images/icons/form-mail-icon.png' alt="Email Icon" /></figure>
                        <input type="text" placeholder="Email Address"  value={UserEmail} onChange={e=> setUserEmail(e.target.value)}/>
                        <div className="line"></div>
                    </div>

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <MdOutlinePhoneAndroid size='2.1rem' color="#9D9D9D" /></figure>
                        <input type="text" placeholder="Phone Number" value={UserPhone} onChange={e=> setUserPhone(e.target.value)}
                        ref={phoneRef}
                        onFocus={()=>setUserPhoneFocus(true)}
                        onBlur={()=>setUserPhoneFocus(false)}
                        aria-invalid={validUserPhone ? "false" : "true"}
                        className={validUserPhone ? "validInput" : "invalidInput"}
                        aria-describedby="uidnote"
                        />
                        <div className={validUserPhone ? "valid line" : "line" }></div>
                        <div className={validUserPhone || !UserPhone ? "hide" : "invalid line" }></div>
                        <p id="uidnote" className={UserPhoneFocus && UserPhone && !validUserPhone ? "instructions" : "offscreen"}>
                        Input valid Phonenumber
                    </p>
                    </div>
                   

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <img src='images/icons/form-key-icon.png' alt="Email Icon" /></figure>
                    
                    <input type={!TogglePass ? 'password' : 'text'}  value={UserPass} onChange={e=>setUserPass(e.target.value)} placeholder="Password"
                     onFocus={()=>setUserPassFocus(true)}
                     onBlur={()=>setUserPassFocus(false)}
                     aria-invalid={validUserPass ? "false" : "true"}
                     className={validUserPass ? "validInput" : "invalidInput"}
                     aria-describedby="pidnote"
                    ref={passRef}

                    />
                   <div className={validUserPass ? "valid line" : "line" }></div>
                        <div className={validUserPass || !UserPass ? "hide" : "invalid line" }></div>
                        <p id="pidnote" className={UserPassFocus && UserPass && !validUserPass ? "instructions" : "offscreen"}>
                        • 8-24 Letters | Special Char <br/>• Number | Capital Letters
                    </p>

                        <figure className="modal__form__input__icon pointer" onClick={toggleShow}> {!TogglePass ? <IoMdEye size='2.5rem' color="#C5C5C5" /> : <IoMdEyeOff size='2.5rem' color="#C5C5C5" />} </figure>



                    </div>

                    <div className="modal__form__input">
                    <figure className="modal__form__input__icon"> <img src='images/icons/form-key-icon.png' alt="Email Icon" /></figure>
                        <input type={!TogglePass ? 'password' : 'text'} placeholder="Confirm Password" value={UserConfirmPass} onChange={e=>setUserConfirmPass(e.target.value)} />
                        <div className="line"></div>
                         
                    </div>


                    <button className="modal__form__btn btn-secondary">
                    Create Account
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
