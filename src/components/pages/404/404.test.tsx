import React from 'react';
import { mount } from 'enzyme';
import NotFound from './404';

describe('<NotFound />', () => {
    let wrapper = mount(<NotFound name="404" contentTitle="404" metaDescription="" metaTitle="404" />);
    it('should render a page with classes "page page--404"', () => {
        expect(wrapper.find('.page.page--404').length).toBe(1);
    });
});
