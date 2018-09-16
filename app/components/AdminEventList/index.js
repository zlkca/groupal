/**
 *
 * AdminEventList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ListGroup from 'react-bootstrap/lib/ListGroup';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class AdminEventList extends React.Component {
  events = [
    {
      title: 'Hunting Event 1',
      orgnizer: 'James',
      created_date: '2018-08-15',
      member: 12,
      description: 'The best hunting event for newbie in Toronto!',
    },
    {
      title: 'Hunting Event 2',
      orgnizer: 'Peter',
      created_date: '2018-08-15',
      member: 12,
      description: 'The best hunting event for veterien in Toronto!',
    },
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  getListItems() {
    return this.events.map(item => (
      <li key="{item.name}" className="list-group-item">
        <div>{item.title}</div>
        <div>{item.orgnizer}</div>
        <div>{item.created_date}</div>
        <div>{item.description}</div>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <ListGroup>{this.getListItems()}</ListGroup>
      </div>
    );
  }
}

AdminEventList.propTypes = {};

export default AdminEventList;
