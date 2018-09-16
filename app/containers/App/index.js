/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GroupForm from 'containers/GroupForm/Loadable';
import EventForm from 'containers/EventForm/Loadable';

import AdminPage from 'containers/AdminPage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/group-form" component={GroupForm} />
        <Route path="/event-form" component={EventForm} />
        <Route path="/admin" component={AdminPage} />
        <Route path="" component={NotFoundPage} />
        {/* <Route path="/group-form" component={GroupFormPage} /> */}
        <Route path="/event-form" component={EventForm} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
