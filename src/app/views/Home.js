import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Formio} from 'react-formio';
import FormioView from 'react-formio/lib/FormioView';
//import Hero from '../containers/Hero';

export default class HomeView extends FormioView {
  component = class Home extends Component {
    static propTypes = {
      auth: PropTypes.object.isRequired
    };

    render() {
      const {auth} = this.props;
      return (
        <div>
          <Formio src="https://rytgokqjbsjtuez.form.io/introductie" />
        </div>
      );
    }
  }

  mapStateToProps = (state) => {
    return {
      auth: this.formio.auth.selectors.getAuth(state)
    };
  }

  mapDispatchToProps = () => {
    return {};
  }
}
