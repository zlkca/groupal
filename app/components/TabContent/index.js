/**
 *
 * TabContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import AdminGroupListItem from '../AdminGroupListItem';
import AdminEventListItem from '../AdminEventListItem';

export default class TabContent extends React.Component {
  contents = {
    groups: AdminGroupListItem,
    events: AdminEventListItem,
  };

  render() {
    const MyComp = this.contents[this.props.item.id];
    return <MyComp />;
  }
}

TabContent.propTypes = {
  item: PropTypes.any,
};
