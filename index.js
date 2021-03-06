var tulind = require('bindings')('tulind');



var make_call = function(ind) {
  var index = ind.index;
  return function(inputs, options, callback) {
    return tulind.callbyindex(index, inputs, options, callback);
  };
};

var make_start = function(ind) {
  var index = ind.index;
  return function(options) {
    return tulind.startbyindex(index, options);
  };
};


var indicators = tulind.indicators;
for (var key in indicators) {
  var ind = indicators[key];

  ind.indicator = make_call(ind);
  ind.start = make_start(ind);
  delete ind.index;
}



module.exports = {
  indicators: indicators,
  version: tulind.version
};
