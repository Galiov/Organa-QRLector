import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import Time from './Time';
 
class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: "100%",
    }
 
    return(
      <div className="row">
        <div className="col">
                    <div className="start col" >
                <h2>¡Hola Laboratorian!</h2>
                <h4>Coloca tu código QR frente<br></br> a la cámara y registra tu<br></br> asistencia</h4>
            </div>
         <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        </div>
        <div className="col start">
          <Time />
         <p className="welcome col">Bienvenida {this.state.result}, ten un hermoso día</p> 
         </div>
      </div>
    )
  }
}

export default Test;