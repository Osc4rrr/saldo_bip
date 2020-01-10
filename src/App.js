import React, { Fragment, useState } from 'react';
import Formulario from './componentes/Formulario'; 
import DetalleSaldoTarjeta from './componentes/DetalleSaldoTarjeta';
import Header from './componentes/Header'; 
import axios from 'axios'; 


function Error({mensaje}){
  return(
    <div className="alert alert-danger animated fadeIn" role="alert">
      {mensaje}
    </div>
  )
}

function App(){

  const [DetalleTarjeta, guardarDetalleTarjeta] = useState({});
  const [errorInput, guardarErrorInput] = useState(false); 
  const [errorConsulta, guardarErrorConsulta] = useState(false);
  const [existeConsulta, guardarExisteConsulta] = useState(false);  

  const consultarSaldoTarjeta = async (busqueda) => {

    if(busqueda.numeroTarjeta === ''){
      guardarErrorInput(true); 
      return; 
    }


    try {

      const url = `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${busqueda.numeroTarjeta}`; 

      const resultado = await axios(url);

      guardarDetalleTarjeta(resultado.data);
      console.log(DetalleTarjeta); 

      guardarExisteConsulta(true); 
      
    } catch (error) {
      guardarErrorConsulta(true); 
      return;
    }

    guardarErrorConsulta(false); 
    guardarErrorInput(false); 


  }

  let componente; 

  if(errorConsulta){
    componente = <Error mensaje="Numero de tarjeta no identificado"/>
  }else if(errorInput){
    componente = <Error mensaje="Debes escribir un numero de tarjeta"/>
  }else if(existeConsulta){
    componente = <DetalleSaldoTarjeta DetalleTarjeta={DetalleTarjeta}/>
  }

  return(
    <Fragment>

      <div className="container centrar">
        <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6"><Header/></div>
        <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
              <Formulario consultarSaldoTarjeta={consultarSaldoTarjeta}/>
              
          </div>
          <div className="col-lg-3"></div>

          <div className="col-lg-3"></div>
          <div className="col-lg-6">
          {componente}
          </div>
          <div className="col-lg-3"></div>

        </div>

      </div>

    </Fragment>
  ); 
}


export default App; 