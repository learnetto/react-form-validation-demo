import React, { Component } from 'react';

class Form extends Component {
	render () {
		return (
			<form>
				<p>Email: <input /></p>
				<p>Password: <input /></p>
				<p>Password confirmation: <input /></p>
				<p><button>Sign up</button></p>
			</form>
		)
	}
}

export default Form;