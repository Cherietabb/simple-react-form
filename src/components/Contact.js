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
	// margin: 'auto 0'
};

const textFieldStyle = {
	display: 'flex',
  flexDirection: 'column',
};

const stateNameList = [
	'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
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
			state: '',


		};
		this.onStateChange = this.onStateChange.bind(this)
	}

	// _renderStates() {
	// 	return this.state.stateNameList.map(stateName => {
	// 		return <MenuItem key={stateName} />
	// 	})
	// }
	//
	onStateChange = (e, updatedValue) => {
		this.setState({
			state: updatedValue
		}, console.log(this.state.stateName))
		this.props.updateStateState(updatedValue)
	};


	handleInputChange = e => {
		this.props.onChange({ [e.target.name]: e.target.value });
		this.setState({
			[e.target.name]: e.target.value
		}, console.log(e.target.name))
	};

	validate = () => {
		let isError = false;
		const phonePattern = "{3}[-.]?{3}[-.]?{4}\b";
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
		}

		if (this.state.email !== /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
			isError = true
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
				state: '',
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
					// floatingLabelFixed
				/>

				<TextField
					name="lastName"
					hintText="Last Name"
					floatingLabelText="Last Name"
					style={textFieldStyle}
					value={this.state.lastName}
					onChange={e => this.handleInputChange(e)}
					errorText={this.state.lastNameError}
					// floatingLabelFixed
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
					// floatingLabelFixed
				/>

				<TextField
					name="phone"
					hintText="Phone"
					floatingLabelText="Phone"
					style={textFieldStyle}
					value={this.state.phone}
					onChange={e => this.handleInputChange(e)}
					errorText={this.state.phoneError}
					// floatingLabelFixed
				/>
				<SelectField
					name="state"
					floatingLabelText="State"
					value={this.state.stateName}
					style={textFieldStyle}
					onChange={(e) => this.handleInputChange(e)}
					maxHeight={200}>
						{stateNameList.map(stateName => <MenuItem key={stateName} onChange={(e) => this.onStateChange(stateName)} primaryText={stateName} />)}
						{/* {this._renderStates()} */}
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
