// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (number) => {
  function fareMultiplier(fare) {
    return fare * number;
  }
  return fareMultiplier;
};

const fareDoubler = (fare) => {
  return fare * 2;
};
//solution
// const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}
