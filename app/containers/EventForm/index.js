/**
 *
 * EventForm
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
import makeSelectEventForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import Img from './Img';
import './style.scss';
import logo from '../../images/icon-512x512.png';

/* eslint-disable react/prefer-stateless-function */
export class EventForm extends React.Component {
  event = {
    name: 'Party',
    owner: 'James',
    address: '123 Yonge Street',
    description: 'Awsome parthy all over the world!',
    member: 10,
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>EventForm</title>
          <meta name="description" content="Description of EventForm" />
        </Helmet>
        <div className="container mb-2">
          <div className="row mb-1">
            <div className="col-7">
              <div className="row mb-1" name="evnet info">
                <div className="col-2">
                  <Img name="logo" src={logo} alt="User Logo" />
                </div>
                <div className="col-10">
                  <div>Event: {this.event.name}</div>
                  <div>Organizer: {this.event.owner}</div>
                  <div>Address: {this.event.address}</div>
                  <div>Description: {this.event.description}</div>
                </div>
              </div>
              <div className="row mb-1 mt-2">
                <div className="col">
                  <div className="row mb-1" name="number of member">
                    There are <b>{this.event.member}</b> people already joined!
                  </div>
                  <div className="row mb-1" name="member avatar">
                    <img src={logo} alt="user avatar" className="avatar" />
                    <img src={logo} alt="user avatar" className="avatar" />
                  </div>
                </div>
                <div className="col">
                  <div className="row mb-1 buttons" name="join button">
                    <button type="button" className="btn btn-sm btn-primary">
                      Join
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="row mb-1" name="commit"></div> */}
            </div>
            <div className="col-5">
              <div className="row" name="map">
                MAP
              </div>
              <div className="row" name="previous event">
                Previous
              </div>
              <div className="row" name="next events">
                Nexts
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
