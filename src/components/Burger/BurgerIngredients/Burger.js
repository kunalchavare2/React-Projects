import React from "react";
import Styles from './Burger.module.css'
import BurgerIngredients from "./BurgerIngredients";


const burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients)
        .map((ingredient) => {
            return [...Array(props.ingredients[ingredient])].map((_, i) => {
                return <BurgerIngredients key={ingredient + i} type={ingredient} />
            });
        })
    return (
        <div className={Styles.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformIngredients}
            <BurgerIngredients type="bread-bottom" />

        </div>
    );
}


export default burger;