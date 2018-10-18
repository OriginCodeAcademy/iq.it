'use strict';

import { expect } from 'chai';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nightmare from 'nightmare';
import React from 'react';
import server from '../server/server';
import Login from '../src/Components/Login/Login.jsx';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('<Login />', function() {
  this.timeout(6500);

  describe('HTML', () => {
    beforeEach(() => {
      wrapper = render(<Login />);
    });
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

  describe('Integration', function () {
    this.timeout(10000);
    const url = 'http://localhost:8888/';
    let app;
    let nightmare;

    before(() => {
      app = server.listen(8888);
    });

    beforeEach(() => {
      nightmare = Nightmare()
    });

    after(() => {
      app.close()
    });

    it('Should redirect user to waiting when logging in', (done) => {
      nightmare
        .goto(url)
        .type('#email', 'anthony@origincodeacademy.com')
        .type('#password', 'test')
        .click('#submit')
        .wait(2000)
        .evaluate(() => document.location.hash)
        .end()
        .then(text => {
          expect(text).to.not.equal('#/')
          done()
        })
    })
  });
});
