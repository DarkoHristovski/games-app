import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const Login = () =>{

const {userLogin} = useContext(AuthContext);
const navigate = useNavigate();


const [loginData, setLoginData] = useState({
email:'',
password:'',
});



const addLoginHandler=(e)=>{
  navigate('/');
e.preventDefault();

authService.login(loginData.email,loginData.password).then(authData=>{
  console.log(authData);
  userLogin(authData);
  navigate('/');
  
})
.catch(()=>{
  navigate('404');
})
}

const onChange=(e)=>{
  setLoginData(state=>({
    ...state,
    [e.target.name]:e.target.value
  }))
}

    return (
        <>
        {/* Login Page ( Only for Guest users ) */}
        <section id="login-page" className="auth">
          <form id="login" onSubmit={addLoginHandler}>
            <div className="container">
              <div className="brand-logo" />
              <h1>Login</h1>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Sokka@gmail.com"
                onChange={onChange}
                value={loginData.email}
              />
              <label htmlFor="login-pass">Password:</label>
              <input type="password" id="login-password" name="password" onChange={onChange} value={loginData.password}/>
              <input type="submit" className="btn submit" defaultValue="Login" />
              <p className="field">
                <span>
                  If you don't have profile click <a href="#">here</a>
                </span>
              </p>
            </div>
          </form>
        </section>
      </>
    )




}


export default Login;