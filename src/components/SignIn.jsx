import firebase,{auth} from '../firebase'
import {makeStyles,Button} from '@material-ui/core'
const useStyles = makeStyles((theme)=>{
  return{
    maindiv:{
      backgroundColor:"#282c34"
    },
    div:{
      backgroundColor:"#282c34",
      width:'100%',
      height:'500px'
    },
    button:{
      position:"relative",
      top:"100px",
      left:'325px',
      backgroundColor:"#0d47a1",
      color:"white",
      padding:"20px 30px",
      "&:hover":{
        backgroundColor: "#1976d2"
      }
    },

  }
  })
function SignIn(){
  const classes = useStyles();
  const signInWithGoogle=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <div className={classes.maindiv}>
      <Button  className={classes.button} onClick={signInWithGoogle}>Sign In with Google</Button>
      <div className={classes.div}></div>
    </div>
        )
}
export default SignIn
