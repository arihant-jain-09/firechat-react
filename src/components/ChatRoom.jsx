import React,{useState,useRef} from 'react'
import firebase,{firestore,auth} from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import {Button,makeStyles,Input} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
const useStyles=makeStyles((theme)=>{
  return{
    text:{
      marginTop:theme.spacing(1),
      marginBottom:theme.spacing(3),
      padding:'5px',
      width:'92%'
    },
    input:{
      backgroundColor:"white"
    },
    btn:{
      height:'42px',
      "&:hover":{
        backgroundColor:"#506999"
      }
    }
  }
})

function ChatRoom(){
  const classes=useStyles();
const dummy = useRef();
const messageRef=firestore.collection('messages');
const query=messageRef.orderBy('createdAt').limit(25);
//here we will use useCollectionData hook to look for changes in real time
//it returns an object where each object is the chat message in database
//Synatx useCollectionData(query,options)
//options takes an Object idField to give id parameter to each message
const [messages]=useCollectionData(query,{idField:'id'});
//it returns an object where each object is the chat message in database
const [formValue,setformValue]=useState('');
//after user press Submit forms calls sendMessage
const sendMessage=async (e)=>{
  e.preventDefault();
  const {uid,photoURL}=auth.currentUser;
  //to add data just use .add method which takes an object
  await messageRef.add({
    text:formValue,
    createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    uid,
    photoURL
  })
  setformValue('');
  dummy.current.scrollIntoView({behaviour:'smooth'});
}
return(
  <>
    <main className={classes.main}>
      {/* if messages then only map */}
      {messages && messages.map((msg)=><ChatMessage key={msg.id} id={msg.id} message={msg} />)}
      <div ref={dummy}></div>
    </main>
    <form onSubmit={sendMessage}  >
      <Input className={classes.input} autoFocus fullWidth classes={{fullWidth:classes.text}} required placeholder="Enter your message" onChange={(e)=>setformValue(e.target.value)} value={formValue} />
      <Button className={classes.btn}  type="submit"><SendIcon style={{ fontSize: 32 }}/></Button>

    </form>
  </>
)
}
export default ChatRoom
