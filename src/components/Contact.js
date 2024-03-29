import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const contentStyle = {
	display: 'flex',
	width: '80%',
	padding: '50px',
	justifyContent: 'center'
};

const textFieldStyle = {
	display: 'flex',
  flexDirection: 'column',
};

const statesList = [
	'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
	'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
	'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
	'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

class MuiContactForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			firstNameError: '',
			lastName: '',
			lastNameError: '',
			email: '',
			emailError: '',
			phone: '',
			phoneError: '',
			stateName: {value: []}
		};
	}

	onStateChange = field => (e, key, value) => {
		this.setState({
			value
		}, console.log(e.target.value))
	};

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		}, console.log(e.target.value))
	};

	menuItems() {
		return statesList.map((stateName, i) => (
			<MenuItem
				key={i}
			  value={stateName}
			  primaryText={stateName}
			/>
		))
	}

	validate = () => {
		let isError = false;
		const phonePattern = this.state.phone.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/);
		const errors = {
			firstNameError: '',
			lastNameError: '',
			emailError: '',
			phoneError: ''
		};
		if (this.state.lastName === '') {
			isError = true;
			errors.lastNameError = "Last name is required"
		}

		if (!this.state.email) {
			isError = true;
			errors.emailError = "Email is required"
		} else if (!this.state.email === /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
			isError = true;
			errors.emailError = "Please enter a valid email address"
		}
		if (this.state.phone && !phonePattern) {
			isError = true;
			errors.phoneError = "Please enter a valid phone number"
		}

		this.setState({
			...this.state,
			...errors
		});

		return isError;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const err = this.validate();
		if (!err) {
			//clear form
			this.setState({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				stateName: ''
			});
			this.props.onChange({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				stateName: ''
			})
		}

	};

	render() {
		return (
		<div
			style={contentStyle}>
			<form>
				<TextField
					name="firstName"
					hintText="First Name"
					floatingLabelText="First Name"
					style={textFieldStyle}
					value={this.state.firstName}
					onChange={e => this.handleInputChange(e)}
					errorText={this.state.firstNameError}
				/>

				<TextField
					name="lastName"
					hintText="Last Name"
					floatingLabelText="Last Name"
					style={textFieldStyle}
					value={this.state.lastName}
					onChange={e => this.handleInputChange(e)}
					errorText={this.state.lastNameError}
				/>

				<TextField
					type="email"
					name="email"
					hintText="Email"
					floatingLabelText="Email"
					style={textFieldStyle}
					value={this.state.email}
					onChange={e => this.handleInputChange(e)}
					errorText={this.state.emailError}
				/>

				<TextField
					name="phone"
					hintText="Phone"
					floatingLabelText="Phone"
					style={textFieldStyle}
					value={this.state.phone}
					onChange={e => this.handleInputChange(e)}
					errorText={this.state.phoneError}
				/>

				<SelectField
					name="stateName"
					multiple={false}
					floatingLabelText="State"
					style={textFieldStyle}
					value={this.state.value}
					onChange={this.onStateChange()}
					maxHeight={200}>
					{this.menuItems()}
				</SelectField>

				<RaisedButton
					label="Submit"
					primary={true}
					style={textFieldStyle}
					onClick={e => this.handleSubmit(e)}>
				</RaisedButton>
			</form>
		</div>
		)
	}
}

export default MuiContactForm;
