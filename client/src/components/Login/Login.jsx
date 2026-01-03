import { useState } from "react";

const Login = () =>{

const [login, setLogin] = useState({
email:'',
password:'',
});

const addLoginHandler=(e)=>{
e.preventDefault();
console.log(login);
}

const onChange=(e)=>{
  setLogin(state=>({
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
                value={login.email}
              />
              <label htmlFor="login-pass">Password:</label>
              <input type="password" id="login-password" name="password" onChange={onChange} value={login.password}/>
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