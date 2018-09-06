import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the groupForm state domain
 */

const selectGroupFormDomain = state => state.get('groupForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GroupForm
 */

const makeSelectGroupForm = () =>
  createSelector(selectGroupFormDomain, substate => substate.toJS());

export default makeSelectGroupForm;
export { selectGroupFormDomain };
