import React, { Fragment } from 'react';

function DetalleSaldoTarjeta({DetalleTarjeta}){

    const {id, saldoTarjeta, fechaSaldo, fechaVencimiento} = DetalleTarjeta; 

    return(
        <Fragment>
            <div className="card text-white bg-primary">
                <div className="card-header">
                    Saldo Tarjeta Bip
                </div>
                <div className="card-body animated fadeIn">
                    <div className="card-title">
                        Numero de tarjeta: {id}
                    </div>
                    <p className="card-text">
                        Saldo: {saldoTarjeta}
                    </p>
                    <p className="card-text">
                        Fecha Ultimo Saldo: {fechaSaldo}
                    </p>
                    
                    <p className="card-text">
                    {fechaVencimiento ? `Fecha Vencimiento: ${fechaVencimiento}` : null}
                    </p>

                </div>

            </div>

        </Fragment>

    ); 
}

export default DetalleSaldoTarjeta; 