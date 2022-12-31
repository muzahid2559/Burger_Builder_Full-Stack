import React, { Component } from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import { Routes, Route, Navigate} from "react-router-dom";
import AuthForm from "./Auth/AuthForm";
import { connect } from "react-redux";
import { authCheck } from "../redux/authActionCreators";
import Logout from "./Auth/Logout";




const mapSatateToProps = state =>{
    return{
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}


class MainComponent extends Component {
    componentDidMount(){
        this.props.authCheck();
    }

        render() {
            
        let rout = null;
        if(this.props.token === null){
            rout = (
                <Routes>
                    <Route path= "/login" element = {<AuthForm/>}/>
                    <Route path="/" element ={<Navigate to ="/login"/>}/>
                </Routes>

            )
        } else {
                rout = (       
                <Routes> 
                    <Route path="/orders" element= {<Orders/>}/>
                    <Route path="/checkout" element= {<Checkout/>}/>
                    <Route path="/logout" element= {<Logout/>}/>
                    <Route path="/" element= {<BurgerBuilder/>}/>
                    <Route path="/login" element ={<Navigate to ="/"/>}/>
                </Routes>
                )
        }

        return (
            <div>
                <Header/>
                <div className="container">

                    {rout}

                </div>
                
            </div>
        )
    }    
}

export default connect(mapSatateToProps, mapDispatchToProps) (MainComponent);