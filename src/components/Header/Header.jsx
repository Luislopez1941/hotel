import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavNavegation from "./NavNavegation"

class Header extends Component {
  constructor(props) {
    super(props);
    this.userRole = "admin";
    this.navbarText = "";

    if (this.userRole === "admin") {
      this.navbarText = "Mi abarrote digital";
    } else {
      this.navbarText = "Mi abarrote digital";
    }
  }

  state = {
    menuVisible: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  };

  render() {
    return (
      <header className="hero">
        <div className="hero__container mx-auto flex justify-between items-center">
          <div className="container__logo">
            <h2>Loremp</h2>
          </div>
          <nav className='nav__hero'>
            <ul className={`nav__items justify-between ${this.state.menuVisible ? 'visible' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li className="nav__item"><Link to="/mesero">Mesero</Link></li>
              <li className="nav__item"><Link to="/bartender">Bartender</Link></li>
              <li className="nav__item"><Link to="/camarista">Camarista</Link></li>
              <li className="nav__item"><Link to="/">Bellboy</Link></li>
              <li className="nav__item"> <NavNavegation link="/login"
              className="nav__link"
              itemValue="Cerrar sesión">
              
            </NavNavegation></li>
              
            </ul>
          </nav>
          <div className={`toggle ${this.state.menuVisible ? 'activo' : ''}`}>
            <button id="toggle__button" onClick={this.toggleMenu}>
              <span className="l1 span" />
              <span className="l2 span" />
              <span className="l3 span" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
