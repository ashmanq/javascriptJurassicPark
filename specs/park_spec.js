const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaurs;
  let dinosaur_1;
  let dinosaur_2;
  let dinosaur_3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 1000);
    dinosaur2 = new Dinosaur('stegasaurus', 'herbivore', 500);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 800);
    dinosaurs = [dinosaur1];
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

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur2);
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur();
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    actual = park.dinosaurMostVisitors();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    actual = park.findDinosaurSpecies('stegasaurus');
    assert.deepStrictEqual(actual, [dinosaur2])
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
