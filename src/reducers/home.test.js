import reducer, { initalState } from './home';
import * as types from '../actions/home';
import { expect } from 'chai';

describe('home reducer', () => {
    it('should return the initial state', () => {
        expect(reducer()).to.equal(initalState);
    });
    it('should set the initial data when the action is called', () => {
        let action = {
            type: types.HOME_SET_INITIAL_DATA,
            payload: {results: "this is a test"}
        };
        expect(reducer(initalState, action).data).to.equal(action.payload.results);
    });
});