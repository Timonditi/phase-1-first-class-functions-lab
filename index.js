const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
}
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
}
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}
function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(drivers, selectorFunction) {
    return selectorFunction(drivers);
}
  