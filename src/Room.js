import React from 'react'; 
import './App.css';
import logo from './au.png';
import fire from './fire';
import firebase from 'firebase';
class ChatRoom extends React.Component {
  constructor(props,context){
    super(props,context)
  this.changeMessage = this.changeMessage.bind(this)
  this.sendMessage = this.sendMessage.bind(this)
  this.state = {
    message:'',
    user: '',
    messages: []
    
    }
  }
 googleSignIn=()=>{
var Provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(Provider).then(function(result){
  console.log(result)
  console.log("Success Google Account Linked")
  var user = result.user.email
  console.log(user)
  var emailCheck = user.slice(-12);
  var valid = 'anderson.edu'
  console.log(emailCheck)
  if (emailCheck == valid){
    console.log('validated email')
    this.isOk = true
    fire.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Room' : 'Room')
    })
  }
}).catch(function(err){
console.log(err)
console.log('Failed')
});
}
componentDidMount(){
  console.log('componentDidMount')
  fire.database().ref('messages/').on('value',(snapshot)=>{
    const currentMessages = snapshot.val()
    if (currentMessages!= null){
      this.setState({
        messages:currentMessages
      })
    }
  })
}
changeName(event){
  this.setState({
    user: event.target.value
  })
}
changeMessage(event){
  this.setState({
    message: event.target.value
  })
}
sendMessage(event){
  const nextMessage = {
    id:this.state.messages.length,
    text:this.state.message
  }
 fire.database().ref('messages/'+nextMessage.id).set(nextMessage)
  
}
  render(){
    const currentMessage = this.state.messages.map((message,i) => {
    return (
      <li key = {message.id}>{message.text}</li>
    )
    })
    return(
  <div>
    <ol>
      {currentMessage},{this.state.user}
      </ol>
      <input  onChange={this.changeMessage} type="text" placeholder="Message"/>
      <button onClick ={this.sendMessage}>POST</button>
    </div>
  ); 
    }
}

export default ChatRoom;
