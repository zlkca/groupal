/**
 *
 * GroupForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGroupForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.scss';
import Img from './Img';
import logo from '../../images/icon-512x512.png';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

/* eslint-disable react/prefer-stateless-function */
export class GroupForm extends React.Component {
  group = {
    title: 'Party',
    name: 'James',
    date: '2018-08-15',
    member: 12,
    description: 'The best party ever in Toronto!',
  };

  // event = {
  //   name: 'Overnight Parthy',
  //   desctiption: 'Awsome Party in Toronto!',
  //   address: '5650 Yonge Street',
  //   dateTime: '2018-09-01 \t 17:30',
  // };

  events = [
    {
      id: 1,
      name: 'Overnight Parthy',
      desctiption: 'Awsome Party in Toronto!',
      address: '5650 Yonge Street',
      dateTime: '2018-09-01 \t 17:30',
    },
    {
      id: 2,
      name: 'Overnight Parthy',
      desctiption: 'Awsome Party in Toronto!',
      address: '5650 Yonge Street',
      dateTime: '2018-09-01 \t 17:30',
    },
  ];

  // Assume user already joined the group and all the events
  groupJoined = false;
  eventJoined = false;

  render() {
    return (
      <AppWrapper>
        <div>
          <Helmet>
            <title>GroupForm</title>
            <meta name="description" content="Description of GroupForm" />
          </Helmet>
          <div className="container">
            <div className="row group-info border-bottom">
              <div className="col-2">
                <Img name="logo" src={logo} alt="User Logo" />
              </div>
              <div className="col-4 detail">
                <div>
                  <b>Group Title:</b> {this.group.title}
                </div>
                <div>
                  <b>Owner:</b> {this.group.name}
                </div>
                <div>
                  <b>Create Date:</b> {this.group.date}
                </div>
                <div>
                  <b>Members:</b> {this.group.member}
                </div>
              </div>
              <div className="col-4 description">
                <b>Description:</b>
                <div>{this.group.description}</div>
              </div>
              <div className="col-2 buttons">
                <div>
                  <button type="button" className="btn btn-sm btn-primary">
                    {groupChange(this.groupJoined)}
                  </button>
                </div>
              </div>
            </div>
            <div className="row event-list">
              <div className="row">
                <div className="col list-title">Coming Events:</div>
              </div>
              {getEvents(this.events, this.eventJoined)}
            </div>
          </div>
        </div>
      </AppWrapper>
    );
  }
}

function groupChange(state) {
  return state ? 'Join Group' : 'Quit Group';
}

function eventChange(state) {
  return state ? 'Join' : 'Quit';
}

function getEvents(events, state) {
  return events.map(event => (
    <div key={event.id} className="row eventBlock border-bottom mb-2">
      <div className="col-5">
        <div className="row">
          <div>
            <b>Event:</b> {event.name}
          </div>
        </div>
        <div className="row">
          <div>
            <b>Address:</b> {event.address}
          </div>
        </div>
        <div className="row">
          <div>
            <b>Date and Time:</b> {event.dateTime}
          </div>
        </div>
      </div>
      <div className="col-5">
        <div>
          <b>Description:</b>
          <div>{event.desctiption}</div>
        </div>
      </div>
      <div className="col-2 buttons">
        <button type="button" className="btn btn-sm btn-primary">
          {eventChange(state)}
        </button>
      </div>
    </div>
  ));
}

GroupForm.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  groupform: makeSelectGroupForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'groupForm', reducer });
const withSaga = injectSaga({ key: 'groupForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GroupForm);
