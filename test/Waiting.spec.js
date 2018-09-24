'use strict';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Waiting from '../src/Components/Waiting/Waiting.jsx';
import Nightmare from 'nightmare';
import server from '../server/server';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('<Waiting />', function() {
  this.timeout(6500);

  describe('HTML', () => {
    beforeEach(() => {
      wrapper = render(<Waiting userId={1} />, { disableLifecycleMethods: true });
    });
    it('Should have a waiting spinner', () => {
      const spinner = wrapper.find('svg');
      expect(spinner[0].attribs.class).to.contain('spin');
    });
    it('Should have a waiting title', () => {
      const title = wrapper.find('h1');
      expect(title.text()).to.contain('Waiting!');
    });
  });

  describe('integration', () => {
    const url = 'http://localhost:8888/#/waiting';
    let app;
    let nightmare;

    before(() => {
      app = server.listen(8888);
    });

    beforeEach(() => {
      nightmare = Nightmare({
        show: true,
      })
    });

    after(() => {
      app.close()
    });

    it('Should redirect unauthenticated users to login page', (done) => {
      nightmare
        .goto(url)
        .wait('h1')
        .evaluate(() => document.querySelector('h1').innerText)
        .end()
        .then(text => {
          expect(text).to.equal('Login!')
          done()
        })
    })

} )
});
