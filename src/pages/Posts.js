import React from 'react'

function Post() {
return(
    <main className = "row mx-auto w-25 my-5">
    <form>
    <h1 className="h3 mb-3 fw-normal">Ingrese su mascota Perdida</h1>
    
    <div className="form-floating">
      <input type="email" className="form-control" id="nombremascota" placeholder="Pepito"/>
      <label for="floatingInput">Nombre de la mascota</label>
    </div>
    <br/>
    <div className="form-floating">
      <input type="email" className="form-control" id="raza" placeholder="Pitbull"/>
      <label for="floatingInput">Raza</label>
    </div>
    <br/>
    <h3>Estado de la mascota </h3>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
      <label class="form-check-label" for="inlineRadio1">😡(agresivo)</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
      <label class="form-check-label" for="inlineRadio1">😟(malo)</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
      <label class="form-check-label" for="inlineRadio2">😐(indiferente)</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
      <label class="form-check-label" for="inlineRadio2">🥵(alzado)</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
      <label class="form-check-label" for="inlineRadio2">🙂(amigable)</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
      <label class="form-check-label" for="inlineRadio2">😄(cariñoso)</label>
    </div>
    <br/>
    <br/>
    <h4>Suba una Imagen de su mascota </h4> 
    <div class="form-group">
      <label for="exampleFormControlFile1">Elija una Imagen</label>
      <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
    </div>
    <br/>
    <button type="submit" class="btn btn-success">Subir</button>

    </form>
    </main>
)
}
export default Post;