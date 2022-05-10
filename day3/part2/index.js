"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./../input', 'utf-8');
var result = file.split(/\r?\n/);
// powerconsumption = gamma * epsilon
var oxygen = result;
var Co2 = result;
function bitSumByIndex(array, index) {
    var bitSum = 0;
    for (var i = 0; i < array.length; i++) {
        bitSum += parseInt(array[i][index]);
    }
    return bitSum;
}
var index = 0;
while (oxygen.length > 1) {
    var bitSum = bitSumByIndex(oxygen, index);
    if (bitSum / oxygen.length >= 0.5) { //redo bitSums after every filter
        oxygen = oxygen.filter(hasOne, index);
    }
    else {
        oxygen = oxygen.filter(hasZero, index);
    }
    index++;
}
index = 0;
while (Co2.length > 1) {
    var bitSum = bitSumByIndex(Co2, index);
    if (bitSum / Co2.length >= 0.5) { //redo bitSums after every filter
        Co2 = Co2.filter(hasZero, index);
    }
    else {
        Co2 = Co2.filter(hasOne, index);
    }
    index++;
}
function hasOne(element) {
    return element[this] == 1;
}
function hasZero(element) {
    return element[this] == 0;
}
console.log(parseInt(oxygen[0], 2) * parseInt(Co2[0], 2));
