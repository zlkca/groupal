/**
 *
 * Tabs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Tab from '../Tab';

/* eslint-disable react/prefer-stateless-function */
function Tabs(props) {
  let head;
  let content = <div className="tab-content" />;
  if (props.items) {
    head = props.items.map(item => <Tab key={item.id} item={item} />);
    content = props.items.map(item => (
      <div
        key={item.id}
        className="tab-pane fade"
        role="tabpanel"
        id={item.id}
        aria-labelledby={`${item.id}-tab`}
      >
        {item.name}
      </div>
    ));
  } else {
    // Otherwise render a single component
    head = <div>Empty</div>;
  }

  return (
    <div>
      <ul className="nav nav-tabs" role="tablist">
        {head}
      </ul>
      <div>{content}</div>
    </div>
  );

  // return (
  //   <div>
  //     <ul className="nav nav-tabs" id="myTab" role="tablist">
  //       {/* <Tab></Tab> */}
  //       <li className="nav-item">
  //         <a
  //           className="nav-link"
  //           data-toggle="tab"
  //           role="tab"
  //           id="events-tab"
  //           aria-controls="events" aria-selectec="true" href="#events">Events</a>
  //       </li>
  //     </ul>
  //     <div className="tab-content" id="myTabContent">
  //       <div className="tab-pane fade show active" id="groups" role="tabpanel" aria-labelledby="groups-tab">Groups</div>
  //       <div className="tab-pane fade" id="events" role="tabpanel" aria-labelledby="events-tab">Events</div>
  //     </div>
  //   </div>
  // );
}

Tabs.propTypes = {
  // component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default Tabs;
