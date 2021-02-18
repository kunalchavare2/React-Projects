import React from "react";
import Styles from './Burger.module.css'
import BurgerIngredients from "./BurgerIngredients";


const burger = (props) => {
    return (
        <div className={Styles.Burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="salad" />
            <BurgerIngredients type="bacon" />

            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat" />

            <BurgerIngredients type="bread-bottom" />

        </div>
    );
}


export default burger;