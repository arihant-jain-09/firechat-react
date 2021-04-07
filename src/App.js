import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
})
const auth=firebase.auth();
function App() {
  const [user]=useAuthState(auth);
  return (
    <div className="App">
      {user?<ShowSignedIn/>:<SignIn/>}
      {console.log(user)}
    </div>
  );
}
function SignIn(){
  const signInWithGoogle=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign In with Google</button>
        )
}
function ShowSignedIn(){
return <h1>Signed in Success</h1>
}
export default App;
