import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/BurgerIngredients/Burger';
import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummmary';

const INGREDIENT_PRICELIST = {
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
        purchasable: false,
        purchasing: false,

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICELIST[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;


        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })

        //to check if order is greater then certain amount
        this.purchasableHandler(newPrice, updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;

            const priceDeduction = INGREDIENT_PRICELIST[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;


            this.setState({
                totalPrice: newPrice, ingredients: updatedIngredients
            })


            //to check if order is greater then certain amount
            this.purchasableHandler(newPrice, updatedIngredients);
        }

    }

    purchasableHandler = (totalPrice, ingredients) => {

        let isPurchasable = this.state.purchasable;

        // isPurchasable = totalPrice > 25 ? true : false;

        if (ingredients['meat'] > 0 || ingredients['bacon'] > 0) {
            isPurchasable = true;
        } else {
            isPurchasable = false;
        }

        this.setState({
            purchasable: isPurchasable,
        })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    cancelOrderHandler = () => {
        this.setState({ purchasing: false });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        // to check whether remove ingredient button should disable 
        // when ingredient value is 0
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>

                <Modal show={this.state.purchasing}
                    dismissModal={this.cancelOrderHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        onCancel={this.cancelOrderHandler}
                        totalPrice={this.state.totalPrice} />
                </Modal>

                <div>
                    < Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientsAdd={this.addIngredientHandler}
                        ingredientsRemove={this.removeIngredientHandler}
                        totalPrice={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        purchasable={this.state.purchasable}
                        disabledInfo={disabledInfo}
                        ordered={this.purchaseHandler} />
                </div>
            </Aux>);
    }
}

export default BurgerBuilder;