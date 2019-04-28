import React, { Component } from 'react'
import Food from './foods'
import { connect } from 'react-redux'
import store from './store';
import fetchFoodDetails from './actions'

class FoodContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data = {
            searchValue: "",
            foods: Food
        }
        store.dispatch({
            type: 'FETCH_FOOD_DETAILS',
            payload: data
        })
    }
    render() {
        console.log("render container");
        console.log(this.props.food);
        return (
            <div>
                <h2>Food Container</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Origin</th>
                            <th>Continent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.food.map(item =>
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.origin}</td>
                                <td>{item.continent}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        food: state.food
    }
}

export default connect(mapStateToProps)(FoodContainer)