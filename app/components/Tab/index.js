/**
 *
 * Tab
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
function Tab(props) {
  const { item: x } = props;
  const className = x.selected ? 'nav-link active' : 'nav-link';
  return (
    <li className="nav-item">
      <a
        className={className}
        data-toggle="tab"
        role="tab"
        id={`${x.id}-tab`}
        aria-controls={x.id}
        aria-selected={x.selected}
        href={`#${x.id}`}
      >
        {x.name}
      </a>
    </li>
  );
}

Tab.propTypes = {
  item: PropTypes.any,
};

export default Tab;
