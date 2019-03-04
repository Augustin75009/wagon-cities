import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from './city';


class ActiveCity extends Component {
  render() {
    // const style = {
    //   backgroundImage : url('https://kitt.lewagon.com/placeholder/cities/paris')
    // }
    if (this.props.activeCity) {
      const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
      return (
        <div className="active-city">
          <img src={url} />
        </div>
      );
    }

    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
    }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators (
//     { activeCity: activeCity },
//     dispatch
//   );
// }

function mapReduxStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapReduxStateToProps)(ActiveCity);
