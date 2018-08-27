/**
 *
 * GroupForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

/* eslint-disable react/prefer-stateless-function */
export class GroupForm extends React.Component {
  group = {
    title: 'Party',
    name: 'James',
    date: '2018-08-15',
    member: 12,
    description: 'The best party ever in Toronto!',
  };

  event = {
    name: 'Overnight Parthy',
    desctiption: 'Awsome Party in Toronto!',
    address: '5650 Yonge Street',
    dateTime: '2018-09-01 \t 17:30',
  };

  // events = [{
  //   name: 'Overnight Parthy',
  //   desctiption: 'Awsome Party in Toronto!',
  //   address: '5650 Yonge Street',
  //   dateTime: '2018-09-01 \t 17:30',
  // }, {
  //   name: 'Overnight Parthy',
  //   desctiption: 'Awsome Party in Toronto!',
  //   address: '5650 Yonge Street',
  //   dateTime: '2018-09-01 \t 17:30',
  // }];

  render() {
    return (
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
            <div className="col-3 detail">
              <div>Group Title: {this.group.title}</div>
              <div>Owner: {this.group.name}</div>
              <div>Create Date: {this.group.date}</div>
              <div>Members: {this.group.member}</div>
            </div>
            <div className="col-5 description">
              Description:
              <div>{this.group.description}</div>
            </div>
            <div className="col-2 buttons">
              <div>
                <button type="button" className="btn btn-sm btn-primary">
                  Join Group
                </button>
              </div>
              <div>
                {/* <button type="button" className="btn btn-sm btn-primary">Quit Group</button> */}
              </div>
            </div>
          </div>
          <div className="row event-list">
            <div className="row">
              <div className="col list-title">Coming Events:</div>
            </div>
            <div className="row eventBlock border-bottom">
              <div className="col-5">
                <div className="row">
                  <div className="eventLeft">Event: {this.event.name}</div>
                </div>
                <div className="row">
                  <div className="eventLeft">Address: {this.event.address}</div>
                </div>
                <div className="row">
                  <div className="eventRight">
                    Date and Time: {this.event.dateTime}
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="eventRight">
                  Description: {this.event.desctiption}
                </div>
              </div>
              <div className="col-2 buttons">
                <button type="button" className="btn btn-sm btn-primary">
                  Join
                </button>
                {/* <button type="button" className="btn btn-sm btn-primary">Quit</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// function getEvents(events) {
//   newEvents = [];

//   for (let i = 0; i < events.length; i++) {
//     template = 0;
//     newEvents.push(template);
//   }

//   return newEvents;
// }

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
