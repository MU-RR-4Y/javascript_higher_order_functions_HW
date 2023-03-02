const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStarts = this.journeys.map((journey)=>{
    return journey.startLocation;
  });
  return journeyStarts;

};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEnds = this.journeys.map((journey)=>{
    return journey.endLocation;
  });
  return journeyEnds;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyTransport = this.journeys.filter((journey)=>{
    return journey.transport=== transport;
  });
  return journeyTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyDistance = this.journeys.filter((journey)=>{
    return journey.distance> minDistance;
  });
  return journeyDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const journeyDistance = this.journeys.reduce(( rollingTotal,journey)=>{
    return rollingTotal += journey.distance;
  },0);
  return journeyDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
const transportlist = this.journeys.map((journey)=>{
  return journey.transport
})
return transportlist
};


module.exports = Traveller;
