import React, {Component} from "react";
import { Link } from "react-router-dom";
import './RegistrationForm.css'


class RegistrationForm extends Component{

    render(){
        return (
            <div className="sm:px-16 px-6">
                <form className="">
                    <div className="form-group">
                        <h3 className="text-center pb-3">Crear una cuenta</h3>
                    </div>
                    <div className="item-registration">
                        <label >Nombre:</label>
                        <input type="text" className="form-control" id="username"/>
                    </div>
                    <div className="item-registration">
                        <label >Apellido:</label>
                        <input type="text" className="form-control" id="username"/>
                    </div>
                    <div className="item-registration">
                        <label >Correo Electronico</label>
                        <input type="text" className="form-control" id="username"/>
                    </div>
                    <div className="item-registration">
                        <label >Contraseña</label>
                        <input type="password" className="form-control" id="username"/>
                    </div>
                    <div className="form-check my-6">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label ml-3" for="exampleCheck1">Acepto terminos y condiciones</label>
                    </div>
                    <div className="item-registration flex justify-center my-6">
                        <button className="btn-create">Crear cuenta</button>
                    </div>
                    <div>
                        <p>¿Ya cuentas con una cuenta? <Link to="/login"><strong className="lead-green">Iniciar sesión</strong></Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;