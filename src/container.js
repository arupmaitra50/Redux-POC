import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultContainer extends Component {
    render() {
        return (
            <div>
                <h1>Search Result is : {this.props.searchValue} </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.searchValue
    }
}

export default connect(mapStateToProps)(ResultContainer);
