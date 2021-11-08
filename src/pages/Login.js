import React from 'react'
import logo from "../assets/Logo.svg";
const Login = () => {
  
  
  return (
    <main className = "row mx-auto w-25 my-5">
    <form>
    <img className="row mx-auto w-25 my-5 mb-4" src={logo} alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="social-login">
                <button class="btn btn-primary" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                <button class="btn btn-danger" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
    </div>
    <br/> 
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
    <br/> 
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
  </main>
  );
};
export default Login;