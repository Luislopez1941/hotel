import React, {Component} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
// import AnchorTag from "../../components/Anchortag";
// import AdminSettingsPage from "../../pages/admin/settings/SettingsPage";
// import AdminShopPage from "../../pages/admin/shop/AdminShopPage";
// import ProfilePage from "../../components/admin/ProfilePage";



class AdminRootPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
        
        let {path, url} = this.props.match;
        console.log(this.props);
    }


    render(){
        return (
                <div>
                    <Header></Header>
                    <div className="root__page">
                        <div className="container__root-page">
                            <div className="row">
                                {/* <div className="col-2">
                                    <div className="list-group side-navigation">
                                        <AnchorTag link={`${this.props.match.path}/`} liClassName="" className="list-group-item list-group-item-action" itemValue="Dashboard"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/shop-list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Shop"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/settings/role-list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Role"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/settings/user-list`} className="list-group-item list-group-item-action" itemValue="System User"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/profile`} className="list-group-item list-group-item-action" itemValue="Profile"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/settings/password-reset`} className="list-group-item list-group-item-action" itemValue="Password Reset"></AnchorTag>
                                    </div>
                                </div>
                                <div className="col-10">
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
        ) 
    }
}

export default AdminRootPage;