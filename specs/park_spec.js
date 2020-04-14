const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaurs;
  // let dinosaur_1;
  // let dinosaur_2;
  // let dinosaur_3;

  beforeEach(function () {
    const dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 1000);
    const dinosaur_2 = new Dinosaur('stegasaurus', 'herbivore', 500);
    const dinosaur_3 = new Dinosaur('triceratops', 'herbivore', 800);
    dinosaurs = [dinosaur_1];
    park = new Park('Jurassic Park', 40, dinosaurs);
  })

  it('should have a name', function () {
    actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    actual = park.ticket_price;
    assert.strictEqual(actual, 40);
  });

  it('should have a collection of dinosaurs', function() {
    actual = park.dinosaurs;
    dinosaur = new Dinosaur('t-rex', 'carnivore', 1000);
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
