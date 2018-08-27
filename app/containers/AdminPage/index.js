/**
 *
 * AdminPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAdminPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Tabs from '../../components/Tabs';

/* eslint-disable react/prefer-stateless-function */
export class AdminPage extends React.Component {
  render() {
    const items = [
      { id: 'groups', name: 'Groups', selected: true },
      { id: 'events', name: 'Events', selected: false },
    ];
    return (
      <div>
        <Helmet>
          <title>AdminPage</title>
          <meta name="description" content="Description of AdminPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />

        <Tabs items={items} />

        {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              role="tab"
              id="events-tab"
              aria-controls="events" aria-selectec="true" href="#events">Events</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="groups" role="tabpanel" aria-labelledby="groups-tab">Groups</div>
          <div className="tab-pane fade" id="events" role="tabpanel" aria-labelledby="events-tab">Events</div>
        </div> */}
      </div>
    );
  }
}

AdminPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminpage: makeSelectAdminPage(),
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

const withReducer = injectReducer({ key: 'adminPage', reducer });
const withSaga = injectSaga({ key: 'adminPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdminPage);
