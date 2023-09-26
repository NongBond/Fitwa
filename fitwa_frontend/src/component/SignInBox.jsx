import React, { useState } from 'react';
import './SignInBox.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth'; // Import PhoneAuthProvider
import { auth } from '../firebase.config';
import toast, { Toaster } from 'react-hot-toast';

function SignInBox() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  // Create a state variable to store the confirmation result
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const appVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          // Captcha callback, called when captcha verification is successful
          // Send OTP to the phone number
          sendOTP();
        },
        'expired-callback': () => {
          // Captcha expired callback
          // Handle expired captcha here
        },
      });

      const formatPh = '+66' + phoneNumber; // Set the country code to '+66' for Thailand
      const provider = new PhoneAuthProvider(auth);

      // Initiate phone number verification
      const confirmation = await signInWithPhoneNumber(provider, formatPh, appVerifier);

      setConfirmationResult(confirmation);
      
      toast.success('OTP Sent Successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send OTP.');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      toast.success('OTP Verified Successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to verify OTP.');
    }
  };

  return (
    <div className="sign-container">
      <Toaster toastOptions={{ duration: 2000 }} />
      <div className="sign-in-box">
        <h2>Sign In with Phone Number</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <PhoneInput
              country={'th'} // Set the default country to Thailand
              inputProps={{
                id: 'phoneNumber',
                required: true,
                placeholder: 'e.g., 610526499'
              }}
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
          <div id="recaptcha-container"></div>
          <button type="submit">Send OTP</button>
        </form>
        {confirmationResult && (
          <div>
            <p>Enter OTP:</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignInBox;
