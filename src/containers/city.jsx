import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { activeCity } from '../actions';
import CityList from './city_list';

class City extends Component {
  handleClick = () => {
    this.props.activeCity(this.props.city);
  }
  render() {
    let classes = "city";
    if (this.props.city === this.props.activeCity) {
      console.log("hello");
      classes += "selected";
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    { activeCity: activeCity },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
