import { fromJS } from 'immutable';
import groupFormReducer from '../reducer';

describe('groupFormReducer', () => {
  it('returns the initial state', () => {
    expect(groupFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
