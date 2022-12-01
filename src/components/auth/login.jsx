import { useForm } from "react-hook-form"
const Login = () => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const customSubmit = (data)=> {console.log()}

        
      return (

        <form onSubmit={handleSubmit(customSubmit)}>
<div className="container px-5">
    <div className="row gx-5 align-items-center">
        <div className="col-lg-6">

        </div>
        <div className="col-lg-6">
            <div className="p-5">
                <h2 className="display-4">¿Ya estás registrado? Inicia Sesión</h2>
            </div>
            <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Nombre de Usuario</label>
                  <div className="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                        <div class="invalid-feedback">
                          Por favor elige un nombre de usuario.
                        </div>
                  </div>
                  
                  <div id="emailHelp" className="form-text">Nunca compartiremos tu nombre de Usuario</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Recordar mi contraseña</label>
                </div>
                <button type="submit" id="boton" className="btn btn-primary">Iniciar Sesión</button>

              </form>
        </div>
    </div>
</div>
    </form>

   
    )
}

export default Login
