import React, {Component} from "react";
import { Link } from "react-router-dom";
import './PasswordResetVerifyForm.css'


class PasswordResetVerifyForm extends Component{

    render(){
        return (
            <div className="">
                <form className="p-6">
                    <div className="form-group">
                        <h3 className="text-center pb-3">Verificacion de correo electronico</h3>
                    </div>
                    <div className="reset-account my-6">
                        <label className="block">Correo Electronico</label>
                        <input type="text" className="form-control w-full mt-3" id="username"/>
                    </div>
                    <div className="form-group flex justify-center w-full ">
                        <button className="btn-forget ">Enviar</button>
                    </div>
                    <div className="mt-8">
                        <p><Link className="btn-back" to="/login">Regresar</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default PasswordResetVerifyForm;