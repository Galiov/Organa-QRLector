import React, { Component } from 'react'

export default class Time extends Component {
    render() {
        let fecha = new Date();
         let Hora = +fecha.getHours()+":"+fecha.getMinutes();
         let Dia = "Viernes "+fecha.getDate()+" Mayo"+" "+fecha.getFullYear(); 
        return (
            <div className="time start">
                <h2>{Hora}</h2>
                <h6>{Dia}</h6>
            </div>
        )
    }
}
