const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const firebase = require('firebase')
const auth = firebase.auth();

  auth.signInWithPhoneNumber(phoneNumber, verificationCode)
  .then(function(result) {
    console.log("Signed In")
  })
  .catch(function(error) {
    console.log("An error occurred while signingIn");
  });

app.post("/sendotp", async (req,res)=>{
    const phoneNumber = req.phone;

    auth.sendSignInLinkToPhoneNumber(phoneNumber, actionCodeSettings)
    .then(function() {
        console.log("Message sent");
    })
    .catch(function(error) {
        console.log("Error Sending Message");
    });

})


import { google } from 'googleapis';

app.post('/sendSMS', async function (req, res) {
  const { phoneNumber, recaptchaToken } = req.body;
  
  const identityToolkit = google.identitytoolkit({
    auth: 'GCP_API_KEY',
    version: 'v3',
  });
  
  const response = await identityToolkit.relyingparty.sendVerificationCode({
    phoneNumber,
    recaptchaToken: recaptcha,
  });
  
 // save sessionInfo into db. You will need this to verify the SMS code
 const sessionInfo = response.data.sessionInfo;
 
});

app.listen(5000, (req,res)=>{
    console.log("Server running in port 5000")
});