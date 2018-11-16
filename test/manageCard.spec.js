'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server/server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('ManageCard page exists', function mocha() {
  this.timeout(6500);

  it('Card model should exist', () =>
    expect(app.models.Card).to.exist
  );

  it('GET /addCard responds with a 200 response code', () =>
    chai.request(app)
      .get('/#/addCard')
        .then((res) => {
          expect(res).to.have.status(200);
        })
  );
});
