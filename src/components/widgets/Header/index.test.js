import React from 'react';
import { MemoryRouter } from 'react-router';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import {Header} from "./index";

describe('<Header />', () => {
    let wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
    it('should render a header tag', () => {
        expect(wrapper.find('header')).to.be.length(1);   
        expect(wrapper.find('header').hasClass('header')).to.be.true;
    });
    it('should render a logo', () => {
        expect(wrapper.find('.logo')).to.be.length(1);
        expect(wrapper.find('.logo img')).to.be.length(1);
    });
    it('should render menu with links', () => {
        let menu = wrapper.find('ul.menu');
        expect(menu).to.be.length(1);
        expect(menu.find('li')).to.be.length(4);
        expect(menu.find('a')).to.be.length(4);
    });
});
