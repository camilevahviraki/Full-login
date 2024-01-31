import React from 'react';
import { FacebookProvider, Login } from 'react-facebook-sdk'

const FacebookLoginButton = () => {
  const handleResponse = (data) => {
    console.log(data);
    // Handle the Facebook login response
  };

  return (
    <FacebookProvider appId="920625192780152">
      <Login
        onResponse={handleResponse}
        onError={(error) => console.error(error)}
      >
        <button>Login with Facebook</button>
      </Login>
    </FacebookProvider>
  );
};

export default FacebookLoginButton;
