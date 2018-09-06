/**
 *
 * AdminGroupListItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AdminGroupListItem() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AdminGroupListItem.propTypes = {};

export default AdminGroupListItem;
