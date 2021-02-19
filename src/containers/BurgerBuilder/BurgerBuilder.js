import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BurgerIngredients/BuildControls/BuildControls';
import Burger from '../../components/Burger/BurgerIngredients/Burger';
import Aux from '../../hoc/Aux';

const INDREDIENT_PRICELIST = {
    salad: 5,
    bacon: 15,
    cheese: 10,
    meat: 20,
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 20,

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INDREDIENT_PRICELIST[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;

            const priceAddition = INDREDIENT_PRICELIST[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;

            this.setState({
                totalPrice: newPrice, ingredients: updatedIngredients
            })
        }

    }
    render() {
        return (<Aux>
            <div>
                < Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientsAdd={this.addIngredientHandler}
                    ingredientsRemove={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    purchasable={true} />
            </div>
        </Aux>);
    }
}

export default BurgerBuilder;