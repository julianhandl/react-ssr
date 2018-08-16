import reducer, { initalState } from './website';
import * as types from '../actions/website';
import { expect } from 'chai';

describe('website reducer', () => {
    it('should return the initial state', () => {
        expect(reducer()).to.equal(initalState);
    });
    it('should toggle the menuOpen prop', () => {
        let action = {
            type: types.WEBSITE_TOGGLE_MENU
        };
        expect(reducer(initalState, action).menuOpen).to.equal(true);
    });
    it('should set menuOpen to false when location changes', () => {
        let action = {
            type: '@@router/LOCATION_CHANGE'
        };
        reducer(initalState, {
            type: types.WEBSITE_TOGGLE_MENU
        });
        expect(reducer(initalState, action).menuOpen).to.equal(false);
    });
});