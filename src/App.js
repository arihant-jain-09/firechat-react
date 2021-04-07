import React from 'react'
import {makeStyles,Grid,Container,AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import SignIn from './components/SignIn'
import ChatRoom from './components/ChatRoom'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from './firebase'
const useStyles=makeStyles((theme)=>{
  return{

    appbar:{
      width:'70%',
      marginLeft:"auto",
      marginRight:"auto"
    },
    grid:{
      display:'block',
      width:"70%",
      marginLeft:"auto",
      marginRight:"auto",
    },
    typography:{
      flexGrow:1,
      letterSpacing:'2px',
    }
  }
})
function App() {
  const classes=useStyles();
    const [user]=useAuthState(auth);
  return (
    <div>
      <Container >
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.typography}>
              FireChat
            </Typography>
            {user?<Button color="inherit" onClick={()=>{auth.signOut()}}>Logout</Button>:null}
          </Toolbar>
        </AppBar>
        <Grid container className={classes.grid} >
            {user?<ChatRoom/>:<SignIn/>}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
