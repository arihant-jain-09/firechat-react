import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
firebase.initializeApp({
  apiKey: "AIzaSyBWZC9xWMKEQMuGPyncAFlaVGnHlNwnEDY",
    authDomain: "superchat-33ed4.firebaseapp.com",
    projectId: "superchat-33ed4",
    storageBucket: "superchat-33ed4.appspot.com",
    messagingSenderId: "305060583764",
    appId: "1:305060583764:web:f11e117b65ec65e718d0c1",
    measurementId: "G-45GES8K7BV"
})
const firestore=firebase.firestore();
const auth=firebase.auth();
function App() {
  const [user]=useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <img src='Added_a_document.png' width="500" height="500"/>
      </header>
      <section>
      {user?<ChatRoom/>:<SignIn/>}
      {console.log(user)}
      {/* {when the user is logged in we can capture image of his gmail photo using user object which has photoURL} */}
      {/* {auth which comes from firebase/auth has access to currentUser so we can check if user is logged in or not} */}
    </section>
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

//till here SignOut is not used anywhere
function SignOut(){
  //if auth.currentUser then it will render button of SignOut
  return auth.currentUser&&(
    <button onClick={()=>auth.signOut()}>SignOut</button>
  )
}
function ChatRoom(){
const messageRef=firestore.collection('messages');
const query=messageRef.orderBy('createdAt').limit(25);
//here we will use useCollectionData hook to look for changes in real time
//it returns an object where each object is the chat message in database
//Synatx useCollectionData(query,options)
//options takes an Object idField to give id parameter to each message
const [messages]=useCollectionData(query,{idField:'id'});
//it returns an object where each object is the chat message in database
return(
  <>
    <div>
      {/* if messages then only map */}
      {messages && messages.map((msg)=><ChatMessage key={msg.id} id={msg.id} message={msg}/>)}
    </div>
  </>
)
}
function  ChatMessage  (props){
  const {text}=props.message;
console.log(props.message);
return(
  <div><p>{text}</p>
</div>
)
}
export default App;
