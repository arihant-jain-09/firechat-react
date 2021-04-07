import {auth} from '../firebase'
import CardUI from './CardUI'
import {Grid,Paper} from '@material-ui/core'
function  ChatMessage  (props){
  const {text,uid,photoURL}=props.message;
  const messageClass=uid === auth.currentUser.uid?'sent':'received';
return(
  <div>
    <Grid item lg={12} alignContent='center'>
      <Paper square >
          <CardUI photoURL={photoURL} text={text} messageClass={messageClass}/>
      </Paper>
    </Grid>

</div>
)
}
export default ChatMessage
