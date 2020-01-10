import React, { Fragment, useState } from 'react';

function Formulario({consultarSaldoTarjeta}){

    const [busqueda, guardarBusqueda] = useState({
        numeroTarjeta:''
    });

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value
        })
    }

    const enviarInfo = e =>{
        e.preventDefault(); 
        consultarSaldoTarjeta(busqueda); 
    }

    return(
        <Fragment>
            <form
                onSubmit={enviarInfo}>
                <input 
                    type="number" 
                    placeholder="Ingrese Numero Tarjeta"
                    className="form-control"
                    name="numeroTarjeta"
                    onChange={actualizarState}>
                    
                </input>
                <button type="submit" className="btn btn-success my-2 w-100">Consultar Saldo</button>
            </form>
        </Fragment>
    ); 
}

export default Formulario; 