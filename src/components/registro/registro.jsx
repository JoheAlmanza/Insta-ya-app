import { useForm } from "react-hook-form";

const Register = () => {
   
      const { register, handleSubmit } = useForm();
      const onSubmit = data => console.log(data);
       
      return (
        <div>
        <section id="scroll">
    <form  className="row g-3 needs-validation" novalidate>
        <label for="basic-url" className="form-label">Formulario de Registro</label>
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">Nombres</label>
          <input type="text" className="form-control" id="validationCustom01" value=" " required/>
          <div className="valid-feedback">
            Bien Hecho!
          </div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">Apellidos</label>
          <input type="text" className="form-control" id="validationCustom02" value=" " required/>
          <div className="valid-feedback">
            Bien Hecho!
          </div>
        </div>
        <div className="col-md-4">
          <label for="validationCustomUsername" className="form-label">Usuario</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
            <div className="invalid-feedback">
              Por favor elige un nombre de usuario.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationCustom03" className="form-label">Ciudad</label>
          <select className="form-select" id="validationCustom03" required>
            <option selected disabled value="">Elige....</option>
                                            <option value="">-</option>
                                            <option value="Arauca">Arauca</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Barranquilla">Barranquilla</option>
                                            <option value="Bogot??">Bogot??</option>
                                            <option value="Bucaramanga">Bucaramanga</option>
                                            <option value="Cali">Cali</option>
                                            <option value="Cartagena">Cartagena</option>
                                            <option value="C??cuta">C??cuta</option>
                                            <option value="Florencia">Florencia</option>
                                            <option value="Ibagu??">Ibagu??</option>
                                            <option value="Leticia">Leticia</option>
                                            <option value="Manizales">Manizales</option>
                                            <option value="Medell??n">Medell??n</option>
                                            <option value="Mit??">Mit??</option>
                                            <option value="Mocoa">Mocoa</option>
                                            <option value="Monter??a">Monter??a</option>
                                            <option value="Neiva">Neiva</option>
                                            <option value="Pasto">Pasto</option>
                                            <option value="Pereira">Pereira</option>
                                            <option value="Popay??n">Popay??n</option>
                                            <option value="Puerto Carre??o">Puerto Carre??o</option>
                                            <option value="Puerto In??rida">Puerto In??rida</option>
                                            <option value="Quibd??">Quibd??</option>
                                            <option value="Riohacha">Riohacha</option>
                                            <option value="San Andr??s">San Andr??s</option>
                                            <option value="San Jos?? del Guaviare">San Jos?? del Guaviare</option>
                                            <option value="Santa Marta">Santa Marta</option>
                                            <option value="Sincelejo">Sincelejo</option>
                                            <option value="Tunja">Tunja</option>
                                            <option value="Valledupar">Valledupar</option>
                                            <option value="Villavicencio">Villavicencio</option>
                                            <option value="Yopal">Yopal</option>
                                        </select>
                                        
          <div className="invalid-feedback">
            Ingresa un nombre de Ciudad v??lida
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom04" className="form-label">Departamento</label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">Elige....</option>
                                            <option value="">-</option>
                                            <option value="Amazonas">Amazonas</option>
                                            <option value="Antioquia">Antioquia</option>
                                            <option value="Arauca">Arauca</option>
                                            <option value="Atl??ntico">Atl??ntico</option>
                                            <option value="Bol??var">Bol??var</option>
                                            <option value="Boyac??">Boyac??</option>
                                            <option value="Caldas">Caldas</option>
                                            <option value="Caquet??">Caquet??</option>
                                            <option value="Casanare">Casanare</option>
                                            <option value="Cauca">Cauca</option>
                                            <option value="Cesar">Cesar</option>
                                            <option value="Choc??">Choc??</option>
                                            <option value="C??rdoba">C??rdoba</option>
                                            <option value="Cundinamarca">Cundinamarca</option>
                                            <option value="Guain??a">Guain??a</option>
                                            <option value="Guaviare">Guaviare</option>
                                            <option value="Huila">Huila</option>
                                            <option value="La Guajira">La Guajira</option>
                                            <option value="Magdalena">Magdalena</option>
                                            <option value="Meta">Meta</option>
                                            <option value="Nari??o">Nari??o</option>
                                            <option value="Norte de Santander">Norte de Santander</option>
                                            <option value="Putumayo">Putumayo</option>
                                            <option value="Quind??o">Quind??o</option>
                                            <option value="Risaralda">Risaralda</option>
                                            <option value="San Andr??s y Providencia">San Andr??s y Providencia</option>
                                            <option value="Santander">Santander</option>
                                            <option value="Sucre">Sucre</option>
                                            <option value="Tolima">Tolima</option>
                                            <option value="Valle del Cauca">Valle del Cauca</option>
                                            <option value="Vaup??s">Vaup??s</option>
                                            <option value="Vichada">Vichada</option>
                                        
          </select>
          <div className="invalid-feedback">
            Por favor elige un departamento v??lido
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom05" className="form-label">Zip</label>
          <input type="text" className="form-control" id="validationCustom05" required/>
          <div className="invalid-feedback">
            Ingresa un c??digo postal v??lido
          </div>
        </div>
        <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label for="inputPassword6" className="col-form-label">Contrase??a</label>
            </div>
            <div className="col-auto">
              <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
              <span id="passwordHelpInline" className="form-text">
                Debe tener de 8-20 caracteres.
              </span>
            </div>
          </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label className="form-check-label" for="invalidCheck">
              Acepto terminos y condiciones
            </label>
            <div className="invalid-feedback">
              Debes aceptar los terminos antes de inscribirte
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Validar</button>
        </div>
      </form>
        </section>
</div>
      );
    }


export default Register