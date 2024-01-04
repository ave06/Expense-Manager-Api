const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('My Express App', () => {
  it('should return "Hello, World!" on /GET', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });

  // Add more test cases as needed
});
