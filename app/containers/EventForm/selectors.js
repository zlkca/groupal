import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the eventForm state domain
 */

const selectEventFormDomain = state => state.get('eventForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EventForm
 */

const makeSelectEventForm = () =>
  createSelector(selectEventFormDomain, substate => substate.toJS());

export default makeSelectEventForm;
export { selectEventFormDomain };
