import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    return (
      <div className="sm:flex block w-full h-screen ">
        <div className="sm:flex hidden sm:w-3/6 w-full items-center justify-center">
          <div className="w-full h-full left__container">
            <div className="left__content">
              <h2>Lorem ipsum dolor sit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate autem, voluptates fuga accusantium repudiandae
              </p>
            </div>
            <div className="left__description"></div>
          </div>
        </div>
        <div className="login__right">
          <div className="right__container">
            <div className="container__title">
              <div className="title__login sm:px-16 px-6 sm:block flex items-center">
                <h2 className=" font-bold">La mejor forma de aprender en linea</h2>
                <br />
                <p className="sm:flex hidden">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  accusamus enim dicta unde, facilis quis rerum, repellat.
                </p>
              </div>
            </div>
            <form className='sm:px-16 px-6 sm:mt-0 mt-20'>
              <div className="form- form__right">
                <label>Usuario</label>
                <div className="flex w-full input items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="px-3" height="1.35em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                  <input type="text" className="form-control" placeholder="Ingresa tu correo" id="username" />
                </div>
              </div>
              <div className="form-group form__right">
                <label>Contraseña</label>
                <div className="flex w-full input items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="px-3" height="1.35em" viewBox="0 0 512 512"><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>
                  <input type="password" className="form-control" placeholder="Ingresa tu contraseña" id="username" />
                </div>
              </div>
              <div className="form-group buttons">
                <button className="mt-5 button__login" type="submit">Login</button>
              </div>
              <div className="m-5">
                <p>¿Olvidaste tu contraseña?{" "}
                  <Link to="/password-reset-account-verify">Restablecer contraseña</Link>
                </p>
              </div>
              <div>
                <p>
                ¿No tienes una cuneta? <Link to="/registration"><strong className="lead-green">Crear una ahora</strong></Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
