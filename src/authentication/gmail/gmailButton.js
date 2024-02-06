import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GmailLogin = () => {

  return (
    <div>
      <h2>Login with Gmail</h2>

      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};

export default GmailLogin;
