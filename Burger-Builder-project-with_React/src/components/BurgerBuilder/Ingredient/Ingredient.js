import React from "react";
import './Ingredient.css';
import BreadTop from '../../../assets/images/top.png';
import BreadButtom from '../../../assets/images/bottom.png';
import Meat from '../../../assets/images/meat.png';
import Salad from '../../../assets/images/salad.png';
import Cheese from '../../../assets/images/cheese.png';


const Ingredient = props => {
    let ingredient = null;
    switch(props.type) {
        case 'bread-top':
            ingredient = <div> <img src={BreadTop} alt = "Top Bread"></img> </div>;
            break;
        case 'bread-bottom':
            ingredient = <div> <img src={BreadButtom} alt = "Bottom Bread"></img> </div>;
            break;
        case 'meat':
            ingredient = <div> <img src={Meat} alt = "Meat"></img> </div>;
            break;
        case 'salad':
            ingredient = <div> <img src={Salad} alt = "Salad"></img> </div>;
            break;
        case 'cheese':
            ingredient = <div> <img src={Cheese} alt = "Cheese"></img> </div>;
             break;

        default:
            ingredient = null;
    }
    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )

}

export default Ingredient;