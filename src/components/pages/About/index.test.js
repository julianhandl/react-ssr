import React from 'react';
import { MemoryRouter } from 'react-router';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { About } from './index';

describe('<About />', () => {
    let wrapper = mount(<About />);
    it('should render a page with classes "page page--about"', () => {
        expect(wrapper.find('.page.page--about')).to.be.length(1);   
    });
    it('should render a h1 tag', () => {
        let h1 = wrapper.find('h1');
        expect(h1).to.be.length(1);
        expect(h1.text()).to.equal('About');
    });
});
