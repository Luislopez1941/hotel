import React, { Component } from "react";


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.userRole = "owner";
  }

  render() {
    return (
      <div className="dashboard__statistics">
        <div className="statistics">
        {/* <PageHeader headerText="Bienvenido a tu abarrote digital" /> */}
        <div className="boards">
          <div className="container__boards">
            <div className="boards__statistics">
              <div className="boards__content">
                <div className="">
                  <p>
                    <b>Productos totales</b>
                  </p>
                  <p>1200</p>
                </div>
              </div>
              <div className="boards__content">
                <div className="">
                  <p>
                    <b>Ventas totales</b>
                  </p>
                  <p>3400</p>
                </div>
              </div>
              <div className="boards__content">
                <div className="">
                  <p>
                    <b>Total vendido hoy</b>
                  </p>
                  <p>123500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default DashboardPage;
