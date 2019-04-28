import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    searchTermChanged = (value) => {
        console.log(value);
        store.dispatch({
            type: 'SEARCH_INPUT_CHANGED',
            payload: value
        })
    }

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={this.state.searchValue}
                    onChange={(event) => this.setState({ searchValue: event.target.value })}
                />
                <button onClick={() => this.searchTermChanged(this.state.searchValue)}>Search Text</button>
            </div>
        )
    }
}

export default connect()(SearchForm);