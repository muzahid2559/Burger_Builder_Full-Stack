import React, {Component} from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import {Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap';
import { connect} from "react-redux";
import {addIngredient, removeIngredient, updatePurchasable} from '../../redux/actionCreators';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = state =>{
    return{
        ingredients:state.ingredients,
        totalPrice:state.totalPrice,
        purchasable:state.purchasable,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchasable: () =>  dispatch(updatePurchasable()),
    }
}


 class BurgerBuilder extends Component {
    state = {
        modalOpen: false,
    }

    addIngredientHandle = type => {
        this.props.addIngredient(type);
        this.props.updatePurchasable();
    }

    removeIngredientHandle = type =>{
        this.props.removeIngredient(type);
        this.props.updatePurchasable();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    handleCheckout = () => {
        this.props.navigate('/checkout');  // <-- এখানে navigate use করা হয়েছে 
      };
    

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients= {this.props.ingredients}/>
                    <Controls 
                    ingredientAdded = {this.addIngredientHandle} 
                    removeIngredient = {this.removeIngredientHandle}
                    price = {this.props.totalPrice}
                    toggleModal = {this.toggleModal}
                    purchasable ={this.props.purchasable}
                    />

                </div>
                <Modal isOpen={this.state.modalOpen}>

                <ModalHeader>Your Order Summary</ModalHeader>

                <ModalBody>
                    <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
                    <Summary ingredients ={this.props.ingredients}/>

                </ModalBody>

                <ModalFooter>
                    <Button style={{ backgroundColor:"#D70F64"  }} onClick={this.handleCheckout}>Continue to Checkout</Button>
                    <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>

                </Modal>
            </div> 
            
        )
    } 
}

// নিচের কোডটি দিয়ে BurgerBuilder এ navigate ফাংশন টা পাঠাচ্ছি। 
function WithNavigate(props) {
    let navigate = useNavigate();
    return <BurgerBuilder {...props} navigate={navigate} />;
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(WithNavigate);