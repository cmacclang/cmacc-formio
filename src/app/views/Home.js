import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Formio} from 'react-formio';
import FormioView from 'react-formio/lib/FormioView';
//import Hero from '../containers/Hero';
/* eslint no-console: 0*/

const form = 'https://vsoqkxzelfinxcb.form.io/cmacc-escrow';
const endpoint = 'https://cmacc.herokuapp.com/formio/cmacc-escrow/';

export default class HomeView extends FormioView {
  component = class Home extends Component {
    static propTypes = {
      auth: PropTypes.object.isRequired
    };

    handleSubmit = (event) => {
      window.location.href = `${endpoint}${event._id}`;
      return {};
    }

    render() {
      const {auth} = this.props;
      return (
        <div>
          <Formio src={form} onSubmit={this.handleSubmit} />
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
