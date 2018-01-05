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
			state: {selected: ''}
		};
	}

	onStateChange = (e) => {

		this.setState({
			[e.target.name]: e.target.value,
			selected: e.target.value
		}, console.log(e.target.value))
	};

	handleInputChange = e => {
		this.props.onChange({ [e.target.name]: e.target.value });
		this.setState({
			[e.target.name]: e.target.value
		}, console.log(e.target.value))
	};

	validate = () => {
		let isError = false;
		const phonePattern = this.state.phone.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);
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
			console.log(this.state);
			//clear form
			this.setState({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				state: ''
			});
			this.props.onChange({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				state: ''
			})
		}

		// this.props.handleSubmit(this.state);
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
					name="state"
					floatingLabelText="State"
					style={textFieldStyle}
					maxHeight={200}>
						{statesList.map((state, index) => <MenuItem key={index} value={this.state.state} onChange={(e) => this.onStateChange()} primaryText={state} />)}
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
