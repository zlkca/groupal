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
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Button from 'react-bootstrap/lib/Button';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAdminPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import messages from './messages';

import AdminGroupList from '../../components/AdminGroupList';
import AdminEventList from '../../components/AdminEventList';

import AdminGroupForm from '../../components/AdminGroupForm';
import AdminEventForm from '../../components/AdminEventForm';
// import AdminGroupListItem from '../../components/AdminGroupListItem';
// import AdminEventListItem from '../../components/AdminEventListItem';

/* eslint-disable react/prefer-stateless-function */
export class AdminPage extends React.Component {
  groups = [];
  events = [];

  render() {
    // const items = [
    //   {
    //     id: 'groups',
    //     name: 'Groups',
    //     selected: true,
    //     component: AdminGroupListItem,
    //   },
    //   {
    //     id: 'events',
    //     name: 'Events',
    //     selected: false,
    //     compoennt: AdminEventListItem,
    //   },
    // ];
    return (
      <div>
        <Helmet>
          <title>AdminPage</title>
          <meta name="description" content="Description of AdminPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Groups">
            <Button
              bsStyle="primary"
              onClick={() => {
                // this.props.history.push('/group-form');
              }}
            >
              Add Group
            </Button>
            <div className="col col-lg-8">
              <AdminGroupForm />
            </div>
            <div className="col col-lg-4">
              <AdminGroupList />
            </div>
          </Tab>
          <Tab eventKey={2} title="Events">
            <Button
              bsStyle="primary"
              onClick={() => {
                // this.props.history.push('/event-form');
              }}
            >
              Add Event
            </Button>
            <div className="col col-lg-8">
              <AdminEventForm />
            </div>
            <div className="col col-lg-4">
              <AdminEventList />
            </div>
          </Tab>
        </Tabs>
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
