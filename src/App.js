import FacebookLoginButton from './authentication/facebook/facebookButton';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GmailLogin from './authentication/gmail/gmailButton';
import './App.css';

function App() {

  // firebase.initializeApp(firebaseConfig);
  const clientId = "480336830287-gu1928tn4tefcogn1501qa06eb2lofhu.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <FacebookLoginButton />
        <GmailLogin />
      </div>
    </GoogleOAuthProvider>

  );
}

export default App;
