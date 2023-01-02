"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.change = function (n1, n2, showpercent, lastdig = 2) {
  var diff = n2 - n1;
  var increase = (diff / n1) * 100;
  if (showpercent) {
    return Number(increase).toFixed(lastdig) + "%";
  } else {
    return Number(increase).toFixed(lastdig);
  }
};

exports.not = function (n1, n2, showpercent, lastdig = 2) {
  var increase = (n1 / n2) * 100;
  if (showpercent) {
    return Number(increase).toFixed(lastdig) + "%";
  } else {
    return Number(increase).toFixed(lastdig);
  }
};

exports.percentoff = function (n1, n2, lastdig = 2) {
  var increase = (n1 * n2) / 100;
  return Number(increase).toFixed(lastdig);
};
