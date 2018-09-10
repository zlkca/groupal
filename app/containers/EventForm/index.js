/**
 *
 * EventForm
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
import makeSelectEventForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import Img from './Img';
import './style.scss';
import logo from '../../images/icon-512x512.png';
import Map from '../../components/Map';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

/* eslint-disable react/prefer-stateless-function */
export class EventForm extends React.Component {
  currentEvent = 1;

  events = [
    {
      id: 1,
      name: 'Party',
      owner: 'James',
      address: '123 Yonge Street',
      description: 'Awsome parthy all over the world!',
      member: 10,
    },
    {
      id: 2,
      name: 'Party',
      owner: 'James',
      address: '123 Yonge Street',
      description: 'Awsome parthy all over the world!',
      member: 10,
    },
    {
      id: 3,
      name: 'Party',
      owner: 'James',
      address: '123 Yonge Street',
      description: 'Awsome parthy all over the world!',
      member: 10,
    },
  ];

  // location = getLocation(this.event.address);

  eventJoined = false;

  render() {
    return (
      <AppWrapper>
        <div>
          <Helmet>
            <title>EventForm</title>
            <meta name="description" content="Description of EventForm" />
          </Helmet>
          <div className="container">
            <div className="row event-info">
              <div className="col-8">
                <div
                  className="row event-block border-bottom"
                  name="evnet info"
                >
                  <div className="col-2">
                    <Img name="logo" src={logo} alt="User Logo" />
                  </div>
                  <div className="col-4">
                    <div>
                      <b>Event:</b> {this.events[this.currentEvent].name}
                    </div>
                    <div>
                      <b>Organizer:</b> {this.events[this.currentEvent].owner}
                    </div>
                    <div>
                      <b>Address:</b> {this.events[this.currentEvent].address}
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <b>Description:</b>
                      <div>{this.events[this.currentEvent].description}</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="row members mb-2" name="number of member">
                      There are <b>{this.events[this.currentEvent].member}</b>
                      people already joined!
                    </div>
                    <div className="row avatars" name="member avatar">
                      <img src={logo} alt="user avatar" className="avatar" />
                      <img src={logo} alt="user avatar" className="avatar" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row" name="join button">
                      <button type="button" className="btn btn-sm btn-primary">
                        {stateChanged(this.eventJoined)}
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="row mb-1" name="commit"></div> */}
              </div>
              <div className="col-4 side border-left">
                <div className="row mb-2 ml-1" name="map">
                  <Map>This is the map!</Map>
                </div>
                <div className="title">Previous Event:</div>
                {getPrevious(this.events, this.currentEvent)}
                <div className="title">Next Event:</div>
                {getNext(this.events, this.currentEvent)}
              </div>
            </div>
          </div>
        </div>
      </AppWrapper>
    );
  }
}

function stateChanged(state) {
  return state ? 'Join' : 'Quit';
}

function getPrevious(events, currentEvent) {
  let previous;
  if (currentEvent === 1) {
    previous = (
      <div className="row mb-2 border-bottom" name="previous event">
        <div className="col">
          <div>
            <b>Event:</b> {events[currentEvent - 1].name}
          </div>
          <div>
            <b>Address:</b> {events[currentEvent - 1].address}
          </div>
        </div>
        <div className="col">
          <b>Description:</b>
          <div>{events[currentEvent - 1].description}</div>
        </div>
      </div>
    );
  } else {
    previous = (
      <div className="mb-2 border-bottom" name="previous event">
        No previous event!
      </div>
    );
  }
  return previous;
}

function getNext(events, currentEvent) {
  let next;
  if (currentEvent === 2) {
    next = (
      <div className="mb-2 border-bottom" name="next event">
        No next event!
      </div>
    );
  } else {
    next = (
      <div className="row mb-2 border-bottom" name="next event">
        <div className="col">
          <div>
            <b>Event:</b> {events[currentEvent + 1].name}
          </div>
          <div>
            <b>Address:</b> {events[currentEvent + 1].address}
          </div>
        </div>
        <div className="col">
          <b>Description:</b>
          <div>{events[currentEvent + 1].description}</div>
        </div>
      </div>
    );
  }
  return next;
}

EventForm.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  eventform: makeSelectEventForm(),
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

const withReducer = injectReducer({ key: 'eventForm', reducer });
const withSaga = injectSaga({ key: 'eventForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventForm);
