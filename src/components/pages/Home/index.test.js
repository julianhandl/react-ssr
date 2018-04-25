import React from 'react';
import { MemoryRouter } from 'react-router';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { Home } from './index';

describe('<Home />', () => {
    let wrapper = mount(<Home />);
    it('should render a page with classes "page page--home"', () => {
        expect(wrapper.find('.page.page--home')).to.be.length(1);   
    });
    it('should render a h1 tag', () => {
        let h1 = wrapper.find('h1');
        expect(h1).to.be.length(1);
        expect(h1.text()).to.equal('Home');
    });
    it('should render a loading element', () => {
        expect(wrapper.find('.loading')).to.be.length(1);
        expect(wrapper.find('.loading').text()).to.equal('Loading');
    });
    it('should render a list with data', () => {
        let data = [{name:'Alex'},{name:'Tom'}];
        let wrapperData = mount(<Home data={data} />);
        let list = wrapperData.find('ul.list');
        expect(list).to.be.length(1);
        let listItmes = list.find('li');
        listItmes.forEach((item, index) => {
            expect(item.text()).to.equal(data[index].name);
        });
    });
});
