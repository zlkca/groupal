import { fromJS } from 'immutable';
import eventFormReducer from '../reducer';

describe('eventFormReducer', () => {
  it('returns the initial state', () => {
    expect(eventFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
