const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
  });
});

describe("Validators", () => {
  beforeEach(() => Videogame.sync({ force: true }));
  describe("rating", () => {
    it("should throw an error if height is null", (done) => {
      Videogame.create({})
        .then(() => done(new Error("It requires a valid height")))
        .catch(() => done());
    });
    it("should work when its a valid rating", () => {
      Videogame.create({ rating: 3 });
    });
  });
});