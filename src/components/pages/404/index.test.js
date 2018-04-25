import React from 'react';
import { MemoryRouter } from 'react-router';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { NotFound } from './index';

describe('<NotFound />', () => {
    let wrapper = mount(<NotFound />);
    it('should render a page with classes "page page--404"', () => {
        expect(wrapper.find('.page.page--404')).to.be.length(1);   
    });
    it('should render a h1 tag', () => {
        let h1 = wrapper.find('h1');
        expect(h1).to.be.length(1);
        expect(h1.text()).to.equal('404');
    });
});
