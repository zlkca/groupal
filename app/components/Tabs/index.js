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
import TabContent from '../TabContent';

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
        <TabContent item={item}>{item.name}</TabContent>
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
}

Tabs.propTypes = {
  // component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default Tabs;
