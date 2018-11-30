function produceDrivingRange(blockRange) {
  return function(a, b) {
    if ((blockRange - Math.abs(parseInt(b) - parseInt(a))) > 0) {
      return 'within range by ' + (blockRange - (parseInt(b) - parseInt(a))) ;
    } else {
      return Math.abs(blockRange - (parseInt(b) - parseInt(a)))  + ' blocks out of range';
    };
  };
}

function produceTipCalculator(percentage) {
  return function(total) {
    return total * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }

}
