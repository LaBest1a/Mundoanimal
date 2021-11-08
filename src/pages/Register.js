import React from 'react'


function Register() {
    return (
        <main className = "row mx-auto w-30 my-5">
            <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="email" placeholder="pedrito43@hotmail.com"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Username</label>
      <input type="email" class="form-control" id="nombre" placeholder="Federico Delgado"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="Password" placeholder="Password"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">RePassword</label>
      <input type="password" class="form-control" id="rePassword" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group  col-md-6">
    <label for="inputAddress">Ciudad</label>
    <input type="text" class="form-control" id="city" placeholder="Formosa-Capital"/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
</main>
    );
}

export default Register
