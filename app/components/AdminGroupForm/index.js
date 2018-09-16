/**
 *
 * AdminGroupForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLable from 'react-bootstrap/lib/ControlLabel';
// import FieldGroup from 'react-bootstrap/lib/FieldGroup';
import Button from 'react-bootstrap/lib/Button';

import ImageUploader from 'react-images-upload';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AdminEventList from '../AdminEventList';

/* eslint-disable react/prefer-stateless-function */
class AdminGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { group: { name: '', description: '' } };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <form>
          <FormGroup controlId="groupName">
            <ControlLable>Group Name</ControlLable>
            <FormControl
              type="text"
              value={this.state.group.name}
              placeholder="Group Name"
            />
          </FormGroup>
          <FormGroup controlId="groupDescription">
            <ControlLable>Group Description</ControlLable>
            <FormControl
              type="text"
              componentClass="textarea"
              value={this.state.group.description}
              placeholder="Group Description"
            />
          </FormGroup>
          {/* <FieldGroup
            id="formControlsFile"
            type="file"
            label="Group QR Code"
            help="Example block-level help text here."
          /> */}
          <ImageUploader
            withIcon
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          />
          <AdminEventList />
          <Button bsStyle="primary">Submit</Button>
        </form>
      </div>
    );
  }
}

AdminGroupForm.propTypes = {};

export default AdminGroupForm;
