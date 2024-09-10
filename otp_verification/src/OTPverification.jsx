import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase.config";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import firebase from "firebase/compat/app";

const OTPVerification = () => {
  const [phone, setPhone] = useState("+923004975820");
  const [userOtp, setUserOTP] = useState();
  const [user, setUser] = useState(null);

  const requestOTP = () => {
    try {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "sendCode",
        {
          size: "invisible",
          callback: function (recapchaToken) {
            axios.post({
              url: "http://localhost5000/sendotp",
              body: {
                phone: phone,
                recapchaToken,
              },
            });
          },
        }
      );
      // render rapchaVerifier.
      window.recaptchaVerifier.render().then(function (widgetId) {
        window.recaptchaWidgetId = widgetId;
      });
    } catch (error) {
      console.log("Error in recaptcha Verifier");
    }
  };

  const sendOTP = async () => {
    try {
      //setPhone("+"+phone);
      //setPhone("+923004975820");
      console.log("Phone", phone);

      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
      });
      //recaptcha.render();

      console.log("Rec -", recaptcha);
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
        .then((res) => {
          console.log("Verified", res);
          return res;
        })
        .catch((error) => {
          console.log(error);
        });
      //console.log("cn : ",confirmation);
      if (!confirmation) console.log("Confirmation is null");
      console.log("CID : ", confirmation);
      setUser(confirmation);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = async () => {
    try {
      console.log(user);
      const data = await user.confirm(userOtp);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>OTP VERIFICATION</h1>
      <div className="pdfApp">
        <PhoneInput
          country={"pk"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          placeholder="Enter Phone number"
        />
        <br />
        <button className="btn btn-primary" onClick={sendOTP}>
          Send OTP
        </button>
        <br />
        <div id="recaptcha"></div>
        <br />

        <input
          type="number"
          placeholder="Enter OTP"
          value={userOtp}
          onChange={(e) => {
            setUserOTP(e.target.value);
          }}
        />
        <br />

        <button className="btn btn-primary" onClick={verifyOTP}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
