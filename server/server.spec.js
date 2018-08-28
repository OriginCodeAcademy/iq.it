'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Server app', function mocha() {
  this.timeout(6500);

  it('Player model should exist', () =>
    expect(app.models.Player).to.exist
  );

  it('GET / responds with a 200 response code', () =>
    chai.request(app)
      .get('/')
        .then((res) => {
          expect(res).to.have.status(200);
        })
  );
});
