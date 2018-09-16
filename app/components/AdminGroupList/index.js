/**
 *
 * AdminGroupList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class AdminGroupList extends React.Component {
  groups = [
    {
      title: 'Hunting Group 1',
      orgnizer: 'James',
      created_date: '2018-08-15',
      member: 12,
      description: 'The best hunting group for newbie in Toronto!',
    },
    {
      title: 'Hunting Group 2',
      orgnizer: 'Peter',
      created_date: '2018-08-15',
      member: 12,
      description: 'The best hunting group for veterien in Toronto!',
    },
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  getListItems() {
    return this.groups.map(item => (
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

AdminGroupList.propTypes = {};

export default AdminGroupList;
