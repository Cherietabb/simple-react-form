import React, {Component} from 'react';
import {Row, Form, FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'text'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    alert('name: ' + this.refs.name);
    console.log('Success');
    if (this.refs.contactForm.isValid) {
      this.setState({
        type: 'info',
        message: 'Sending...'
      });
    }
    event.preventDefault();
  }

  render() {
    const states = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
  'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

    return (
      <Col className='form-container'>
        <Form horizontal className="form-horizontal" action=" " ref= "contactForm" id="contact_form" onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalFirstName">
            <Col md={4} componentClass={ControlLabel}>
              First Name
            </Col>
            <Col md={4}>
              <FormControl type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange}/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalLastName">
            <Col md={4} componentClass={ControlLabel}>
              Last Name
            </Col>
            <Col md={4}>
              <FormControl type="text" placeholder="Last Name" value={this.state.firstName} onChange={this.handleInputChange}/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalLastEmail">
            <Col md={4} componentClass={ControlLabel}>
              Email
            </Col>
            <Col md={4}>
              <FormControl type="text" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPhone">
            <Col md={4} componentClass={ControlLabel}>
              Phone Number
            </Col>
            <Col md={4}>
              <FormControl type="text" placeholder="845-555-5555" value={this.state.phone} onChange={this.handleInputChange}/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalAddress">
            <Col md={4} componentClass={ControlLabel}>
              Address
            </Col>
            <Col md={4}>
              <FormControl type="text" placeholder="Address" value={this.state.address} onChange={this.handleInputChange}/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalCity">
            <Col md={4} componentClass={ControlLabel}>
              City
            </Col>
            <Col md={4}>
              <FormControl type="text" placeholder="City" value={this.state.city} onChange={this.handleInputChange}/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalState">
            <Col md={4} componentClass={ControlLabel}>
              State
            </Col>
            <Col md={4}>
              <FormControl componentClass='select' type="text" placeholder="State" value={this.state.state} onChange={this.handleInputChange}>
                {states.map(state => <option value='state' key={state}>{state}</option>)}</FormControl>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalZip">
            <Col md={4} componentClass={ControlLabel}>
              Zip Code
            </Col>
            <Col md={4}>
              <FormControl type="text" placeholder="Zip Code" value={this.state.zip} onChange={this.handleInputChange}/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalMessage">
            <Col md={4} componentClass={ControlLabel}>
              Enter message
            </Col>
            <Col md={3}>
              <FormControl componentClass='textarea' type="text" placeholder="Message" value={this.state.message} onChange={this.handleInputChange}/>
            </Col>
          </FormGroup>
          <Button type="submit" onClick={(e) => this.handleSubmit(e)}>
            Submit
          </Button>
        </Form>
      </Col>
    )
  }
}

export default ContactForm;
