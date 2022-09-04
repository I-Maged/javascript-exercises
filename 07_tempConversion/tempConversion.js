const ftoc = function (temp) {
  let cel = (temp - 32) * (5 / 9);
  cel = cel.toFixed(1);
  return Number(cel);
};

const ctof = function (temp) {
  let fehr = (temp * 9) / 5 + 32;
  fehr = fehr.toFixed(1);
  return Number(fehr);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
