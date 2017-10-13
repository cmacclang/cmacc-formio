import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
//import Header from './containers/Header';
//import Footer from './containers/Footer';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="main-container">
        <main className="main">
          <div className="container">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}
