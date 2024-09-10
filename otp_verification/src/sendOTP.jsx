import React, { useRef, useState } from "react";
import firebase from "./firebase";
import { RecaptchaVerifier } from "firebase/auth";
const SendOTP = ()=>{
    const[phone,setPhone] = useState("");
    const[verificationId,setVerificationID] = useState('');
    const recaptchaRef = useRef(null);
    const sendOTP = ()=>{

        if(recaptchaRef.current){
            recaptchaRef.current.innerHTML = ' <div id="recaptcha-cotainer"></div>'

        }
        const verifier = new firebase.auth.RecaptchaVerifier('recaptcha-cotainer',{
            size:'invisible',
        })
        firebase.auth().signInWithPhoneNumber(phone,verifier)
        .then(confirmationResult =>{
            setVerificationID(confirmationResult.verificationId)

        }).catch(error => {
            console.error("Error Sending OTP",error)
        })
    }
    return (
        <div>
            <h1>OTP Sender</h1>
            <div ref={recaptchaRef}></div>
            <input
            type="tel"
            placeholder="+923004975820"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            
            />
            <button onClick={sendOTP}>Send OTP</button>
        </div>
        
    )
}

export default SendOTP;