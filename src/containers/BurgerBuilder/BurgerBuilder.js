import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BurgerIngredients/BuildControls/BuildControls';
import Burger from '../../components/Burger/BurgerIngredients/Burger';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
    render() {
        return (<Aux>
            <div>
                < Burger />
                <BuildControls purchasable={true} />
            </div>
        </Aux>);
    }
}

export default BurgerBuilder;