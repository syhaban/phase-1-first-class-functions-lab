// Code your solution in this file!
const drivers = [`Antonia`, `Nuru`, `Amari`, `Mo`];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return fare*num
    }
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn){
    return driversToReturn(arrayOfDrivers)
};