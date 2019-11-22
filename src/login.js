import React from 'react'; 
import logo from './au.png';
import firebase from 'firebase';
// this is the NavBar component
const Login = () => {
    const googleSignIn=()=>{
        var Provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(Provider).then(function(result){
          console.log(result)
          console.log("Success Google Account Linked")
          var user = result.user.email
          console.log(user)
          var emailCheck = user.slice(-3);
          console.log(emailCheck)
       }).catch(function(err){
      console.log(err)
       console.log('Failed')
      });
    return (
      <div className="login">
          <img src={logo} alt="Anderson University"></img>
        <button onClick = {this.googleSignIn}>Sign IN</button>
      </div>
    );
  };
}
export default Login

