import {Card,CardHeader,Avatar,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
const useStyles=makeStyles((theme)=>{
  return{
    card:{
      height:theme.spacing(5),

      borderRadius:theme.spacing(0)
    },
    cardHeader:{
      height:theme.spacing(1.1),

      position:'relative',
      left:(props)=>{
        if(props.messageClass==="sent"){
          return '350px'
        }
      },
      width:(props)=>{
        if(props.messageClass==='received'){
          return '50%'
        }
      }
    },
    avatar:{
      width:theme.spacing(3),
      height:theme.spacing(3)
    },
    cardheadtypo:{
      color:theme.palette.secondary.contrastText,
      // borderRadius:"16px 2px 2px 16px" ,
      borderRadius:"16px" ,
      padding: theme.spacing(1),
      paddingLeft:theme.spacing(2.2),
      backgroundColor:(props)=>{
        if(props.messageClass==="sent"){
           return theme.palette.secondary.light
          }
        else {
          return theme.palette.primary.light
        }
      }
    },
    avatardefault:{
      marginRight:theme.spacing(0.5)
    }
  }
})
const Inputlength=(text)=>{
  console.log(text);
  if(text.length<61)
  return text
  else{
    return "Msg should be less than 60 characters"
  }
}
function CardUI(props){
  const classes=useStyles(props);
  return <div>
    <Card className={classes.card} >
      <CardHeader classes={{avatar:classes.avatardefault}}
        className={classes.cardHeader}
        avatar={<Avatar className={classes.avatar}
          src={props.photoURL}></Avatar>}
          title={<Typography className={classes.cardheadtypo}>{Inputlength(props.text)}</Typography>}/>
    </Card>
  </div>
}
export default CardUI
