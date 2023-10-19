import React, { Component } from "react";
import { Route, Routes,  } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main"
// import AnchorTag from "../../components/Anchortag";
// import DashboardPage from "../../page/customer/Dashboard";
// import CustomerShopPage from "../customer/shop/CustomerShopePage";
// import ProfileBasePage from "../customer/profile/ProfileBasePage";


class CustomerRootPage extends Component {
  constructor(props) {
    super(props);
    this.userRole = "owner";
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default CustomerRootPage;
