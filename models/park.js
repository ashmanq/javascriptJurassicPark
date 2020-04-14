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

// Park.prototype.dinosaurMostVisitors = function() {
//   let max = 0;
//   const sorted_list = this.dinosaurs.
//   // for (let i=0; i<this.dinosaurs.length;i++) {
//   //   if (this.dinosaur[i].guestsAttractedPerDay > max) {
//   //     max = this.dinosaurs[i].guestsAttractedPerDay
//   //   }
//   // }
// }

Park.prototype.findDinosaurSpecies = function(species) {
  let results = [];
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species == species){
      results.push(dinosaur);
    }
  }
  return results;
}


Park.prototype.calcTotalVisitorsPerDay = function() {
  let total = 0;
  for (let dinosaur of this.dinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.calcTotalVisitorsPerYear = function() {
  const totalPerDay = this.calcTotalVisitorsPerDay();
  return totalPerDay * 365;
}

Park.prototype.calcTotalRevenueForYear = function() {
  const totalPeoplePerYear = this.calcTotalVisitorsPerYear();
  return totalPeoplePerYear * this.ticket_price;
}


module.exports = Park;
