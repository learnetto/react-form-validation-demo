import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      formValid: false
    }
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;

    switch(fieldName) {
      case 'email':
        if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          fieldValidationErrors.email = ' is invalid';
        } else {
          fieldValidationErrors.email = '';
        }
        break;
      case 'password':
        if(value.length < 6) {
          fieldValidationErrors.password = ' is too short';
        } else {
          fieldValidationErrors.password = '';
        }
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    formValid: fieldValidationErrors.email.length === 0 &&
                                fieldValidationErrors.password.length === 0
                  })
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            ref={(input) => { this.email = input; }}
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.handleUserInput(event)}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(event) => this.handleUserInput(event)}  />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;
