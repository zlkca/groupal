/**
 *
 * Map
 *
 */

import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const MyMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAaWjAzEuq4oJQLyGMdNwut13ISuLvkibk&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ width: `300px`, height: `250px` }} />,
    containerElement: <div style={{ width: `300px`, height: `250px` }} />,
    mapElement: <div style={{ width: `300px`, height: `250px` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 43.780292, lng: -79.416408 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 43.780292, lng: -79.416408 }} />
    )}
  </GoogleMap>
));

/* eslint-disable react/prefer-stateless-function */
class Map extends React.Component {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 0);
  };

  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false });
  //   this.delayedShowMarker();
  // };

  render() {
    return (
      <MyMap
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

Map.propTypes = {};

export default Map;
