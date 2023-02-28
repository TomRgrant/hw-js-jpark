const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let dino1
  let dino2
  let dino3
  let dino4
  let dinoList


  this.beforeEach(function () {
    dino1 = new Dinosaur('Tricerotops', 'Herbivore', 30)
    dino2 = new Dinosaur('T-rex', 'Carnivore', 80)
    dino3 = new Dinosaur('Rapotor', 'Carnivore', 70)
    dino4 = new Dinosaur('Pterodon', 'Carnivore', 35)
    dinoList = [dino1, dino2, dino3, dino4]

    park = new Park('Jurrasic Park', 10, dinoList)
    console.log(park);
  })

  it('should have a name', function () {
    assert.strictEqual(park.name, 'Jurrasic Park')
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.price, 10)
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinoCollection, [dino1, dino2, dino3, dino4])
  });

  it('should be able to add a dinosaur to its collection', function () {
    let newDino
    park.addDino(park, newDino = new Dinosaur('Tomasaur', 'Herbivore', 150))
    assert.deepStrictEqual(park.dinoCollection, [dino1, dino2, dino3, dino4, newDino])
    console.log(park.dinoCollection);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(park)
    assert.deepStrictEqual(park.dinoCollection, [dino1, dino2, dino3, dino4])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    assert.deepStrictEqual(park.mostAttracted(park), dino2)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
