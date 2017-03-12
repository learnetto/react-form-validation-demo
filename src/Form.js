import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	render () {
		return (
			<form className="demoForm">
				<h2>Sign up</h2>
				<div className="panel panel-default">
				  <div className="form-status panel-body">
				    Form status:
				  </div>
				</div>
			  <div className="form-group">
			    <label htmlFor="email">Email address</label>
			    <input type="email" required className="form-control" id="email" placeholder="Email" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="password">Password</label>
			    <input type="password" className="form-control" id="password" placeholder="Password" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="passwordConfirmation">Confirm Password</label>
			    <input type="password" className="form-control" id="passwordConfirmation" placeholder="Password" />
			  </div>
			  <button type="submit" className="btn btn-primary">Sign up</button>
			</form>
		)
	}
}

export default Form;
