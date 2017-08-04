import React, {Component} from 'react';
import {Col, PageHeader} from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
    <Col>
      <PageHeader className='App-header'>
        Simple Contact Form<small> A Reusable form to add to projects.</small>
      </PageHeader>
    </Col>
    )
  }
}

export default Header;
