import React from 'react'; 
import './App.css';
import logo from './au.png';
import fire from './fire';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';
class Home extends React.Component {
  constructor(props,context){
    super(props,context)
  this.changeMessage = this.changeMessage.bind(this)
  this.sendMessage = this.sendMessage.bind(this)
  this.state = {
    message:'',
    currentUser: null,
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
  var isOk = false
  console.log(emailCheck)
  if (emailCheck === valid){
    console.log('validated email')
    isOk = true
    console.log(isOk)
    if (emailCheck === valid){
      console.log('Doing this')
      return <Redirect to="/Home"/>
    }
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
getUserInfo=()=> {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        var test = true
        console.log('this is ok is '+test)
        console.log('This is the user: ', user)
        var current = user
    } else {
        // No user is signed in.
        console.log('There is no logged in user');
    }
    return user
  }
  )}
  render(){
    const currentMessage = this.state.messages.map((message,i) => {
    return (
      <li key = {message.id}>{message.text}</li>
    )
    })   
    return(
  <div>
    <div>
      <span>
    <Link to="/Room">Go to ChatRoom</Link>
    </span>
      </div>
     <img src={logo} alt="Anderson University"></img>
    <p>
        This is a fun chat app for university students to communicate with other
        students on campus that are in their same location. To login you need to
        use your university email.
      </p>
    <button onClick={(event) => { this.googleSignIn(); this.getUserInfo();}}>SIGN IN</button>
    </div>
  ); 
    }
}

export default Home;
