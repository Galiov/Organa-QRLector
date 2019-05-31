import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Time from './Time';


class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-dark bg">
                    <Link to='/details' className="navbar-brand">
                        <img className='home' src="https://lh3.googleusercontent.com/BuwY004a35U2F5Qj62sa8zdR0h-1WGusk95TQOewSEAtSHlNO9xirt-Pse5THAOonxh5GFS66dlNNl59weszYp8w9pD5NOJJ9g780c7nX9gnpCnpbaQN_s77Wdr67V9hkhcO1Mk7wgYqpW-poZssP4UHg9ceC7vuSMjEySq7MXtF72zDwsDkfNHub4S4n8V24A249_UXVFs7_CH8U2jEbKfPDEpRtCz_iaPZSOK9K6rwhd_mxyu8wyGK5p6tkgkANM5IYFJhz6DPztud8VuelCU-SmJ9enLQ8dm9PpUQPYOI1Xce5gjddwTehTgiVcPgoFw13QAPuXnV3Ld3iLAS5bC7WCuC4AyeioDQwF1i1dKvCOU6q4uGjtIqX7AsxeczHoJbK6Ip5TdZ4OPGXvhcXfiMNRWgPZ68qAOTI5HEJQ_p4isumMR5zmxZSOlJq_1BSPI1GzZsuzNoowDSv_nvwtldaYKvRGyDKK0VqESxYAQ4CCTfvVdBxDnmAGtF_DWQRE22kGkSqb6r1h5Y9AKLoJdlbb4202XaNZSWWzr_sojRf-NAXLnv-AqjokkSlTnuTeTAWYN4fLRqAg3iPGC4MJt2cjGNqqQGeChXkBcgf78Qs-KiJ_58Bi34fivlO_CpzmIX1olPS30B_QSI9gb6OBzC=s256-no" alt=""></img>
                    </Link>
                    
                    <Link to='/start'>
                        <button type="button" className="btn btn-dark btn-lg" >Activar QR Lector</button>
                    </Link>
                </nav>
            </div>
        )
    }
}
export default Navbar;