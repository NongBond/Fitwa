import React, { useState } from 'react';
import "./SignInBox.css"

function SignInBox() {
  // State to store user input
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div className='sign-container'>
      <div className="sign-in-box">
        <h2>Sign In with Phone Number</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="e.g., +66610526499"
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInBox;