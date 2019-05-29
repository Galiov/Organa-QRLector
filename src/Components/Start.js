import React, { Component } from 'react';
import Test from './Qr';

export default class Start extends Component {
    render() {
        return (
            <div className='start'>
                <h2>¡Hola Laboratorian!</h2>
                <h4>Coloca tu código QR frente<br></br> a la cámara y registra tu<br></br> asistencia</h4>
                <Test className='center'/>
            </div>
        )
    }
}
