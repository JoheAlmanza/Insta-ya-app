const PedidosPaquete = () => {
    return(
        <div>
        
        <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1"/>                       
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="No. de Orden" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  </div>
                  <button type="button" className="btn btn-success">Consultar Orden</button>
                  <button type="button" className="btn btn-danger">Eliminar Orden</button>
                  
                  <label for="basic-url" className="form-label">Crear Orden de Envío</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Recogida</span>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                  </div>
                  
                  <div className="input-group mb-3">
                    <span className="input-group-text">Destino</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                  </div>
                  
                  <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" placeholder="Usuario" aria-label="Username"/>
                
                  </div>
                  
                  <div className="input-group">
                    <span className="input-group-text">Descripción del Paquete</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                  </div>
                </div>
            </div>
             </div>
    )
}

export default PedidosPaquete