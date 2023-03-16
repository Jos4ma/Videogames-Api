/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  id: 'd03cf50b-2eea-46e1-8449-52c70fbee0fe',
  name: 'Super Mario Bros',
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /allVideogames', () => {
    it('should get 200', () =>
      agent.get('/allVideogames').expect(200)
    );
  });


describe("/allVideogames/Detail/:id", function () {
  it("GET responses with status 200 if a videogame is found", function () {
    return agent.get("/allVideogames/Detail/d03cf50b-2eea-46e1-8449-52c70fbee0fe").expect(function (res) {
      expect(res.status).equal(200);
    });
  }).timeout(10000);
});
});
// describe("/allVideogames?name=", function () {
//   it("GET receives a body length larger if there is query coincidences", function () {
//     return agent.get("/allVideogames?name='Super Mario Bros'").expect(function (res) {
//       expect(Object.keys(res.body).length).equal(13);
//     });
//   }).timeout(3000);
// });