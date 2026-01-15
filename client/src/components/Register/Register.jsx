import { useState, useContext } from "react"
import * as authService from '../../services/authService'
import {useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext"


const Register = () =>{
const[form, setForm] = useState({
email:'',
password:'',
confirmPassword:''

})

const {userLogin} = useContext(AuthContext);
const navigate = useNavigate();

const submitHandler = (e) =>{
e.preventDefault();
console.log(form);
if(form.password !== form.confirmPassword){
  return;
}

authService.register(form.email, form.password)
.then(authDate=>userLogin(authDate));
navigate('/');
}

const onChangeHandler = (e) =>{
  setForm(state=>({
    ...state,
    [e.target.name]:e.target.value
}))

}


    return(
<section id="login-page" className="auth">
  <form id="register" onSubmit={submitHandler}>
    <div className="container">
      <div className="brand-logo" />
      <h1>Register</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="maria@email.com"
        onChange={onChangeHandler}
        value={form.email}
      />
      <label htmlFor="pass">Password:</label>
      <input
       type="password"
      name="password" 
      id="register-password"
      onChange={onChangeHandler}
      value={form.password}
        />
      <label htmlFor="con-pass">Confirm Password:</label>
      <input
       type="password"
        name="confirmPassword"
         id="confirm-password"
        onChange={onChangeHandler}
        value={form.confirmPassword}
         />
      <input className="btn submit" type="submit" defaultValue="Register" />
      <p className="field">
        <span>
          If you already have profile click <a href="#">here</a>
        </span>
      </p>
    </div>
  </form>
</section>

    )
}

export default Register