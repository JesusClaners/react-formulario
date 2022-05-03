import { useState } from 'react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import './ClanersForm.css';

function App() {
 
  const [signupIsShown, setsignupForm] = useState(true);
  const [signinIsShown, setsigninForm] = useState(false);


  const hidesignupFormHandler = () =>{
    setsignupForm(false);
    setsigninForm(true);
  }

  const hidesigninFormHandler = () =>{
    setsigninForm(false);
    setsignupForm(true);
   }


  
  
  return (
    
    
    <div>
      {signupIsShown && <SignupForm onCloseSignUp={hidesignupFormHandler}/>}
      {signinIsShown && <SigninForm onCloseSignIn={hidesigninFormHandler}/>}
    
    </div>
    );
}

export default App;
