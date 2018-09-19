'use strict';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Login from '../src/Components/Login/Login.jsx';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('<Login />', function() {
  this.timeout(6500);

  beforeEach(() => {
    wrapper = render(<Login />);
  });

  describe('html', () => {
    it('Should have a register link', () => {
      const anchors = wrapper.find('a');
      expect(anchors[0].attribs.href).to.contain('#/register');
    });
    it('Should have a waiting link', () => {
      const anchors = wrapper.find('a');
      expect(anchors[1].attribs.href).to.contain('#/waiting');
    });
    it('Should have an email input field', () => {
      const inputs = wrapper.find('input');
      expect(inputs[0].attribs.type).to.contain('email');
    });
    it('Should have a password input field', () => {
      const inputs = wrapper.find('input');
      expect(inputs[1].attribs.type).to.contain('password');
    });
    it('Should have a submit button', () => {
      const buttons = wrapper.find('button');
      expect(buttons[0].attribs.type).to.contain('submit');
    });
  });

});
