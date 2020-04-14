const Park = function(name, ticket_price, dinosaurs) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
  this.dinosaurs.pop();
}

module.exports = Park;
