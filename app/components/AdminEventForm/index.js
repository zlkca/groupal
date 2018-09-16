/**
 *
 * AdminEventForm
 *
 */

import React from 'react';
import DateTimePicker from 'react-datetime-picker';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLable from 'react-bootstrap/lib/ControlLabel';
// import FieldGroup from 'react-bootstrap/lib/FieldGroup';
import Button from 'react-bootstrap/lib/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class AdminEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.event = {
      name: '',
      description: '',
      address: '',
      datetime: new Date(),
    };
  }
  onChangeDateTime = date => date;

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <form>
          <FormGroup controlId="eventName">
            <ControlLable>Event Name</ControlLable>
            <FormControl
              type="text"
              value={this.event.name}
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup controlId="eventDescription">
            <ControlLable>Event Description</ControlLable>
            <FormControl
              type="text"
              componentClass="textarea"
              value={this.event.description}
              placeholder="Description"
            />
          </FormGroup>
          <FormGroup controlId="eventAddress">
            <ControlLable>Event Address</ControlLable>
            <FormControl
              type="text"
              value={this.event.address}
              placeholder="Address"
            />
          </FormGroup>
          {/* <FieldGroup
            id="formControlsFile"
            type="file"
            label="Group QR Code"
            help="Example block-level help text here."
          /> */}
          <DateTimePicker
            onChange={this.onChangeDateTime}
            value={this.event.datetime}
          />
          <Button bsStyle="primary">Submit</Button>
        </form>
      </div>
    );
  }
}

AdminEventForm.propTypes = {};

export default AdminEventForm;
