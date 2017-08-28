import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './../actions'

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term : ''};
        this.onInputchange = this.onInputchange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputchange(event){
        this.setState({term : event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term : ''});
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group search-form">
                <input 
                placeholder = "Search indian cities to view their weekday weather forecast!"
                className = "form-control"
                onChange = {this.onInputchange}
                value = {this.state.term}
                />
                <span className="input-group-btn"><button className="btn btn-secondary">Search</button></span>
            </form>
        )
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators({ fetchWeather },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);