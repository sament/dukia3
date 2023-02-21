const util = {

goldBuyPrice:  0,
goldSellPrice: 0,

prevBid: null,
  prevAsk: null,
  setPrevBid: function(value) {
    this.prevBid = value;
  },
  setPrevAsk: function(value) {
    this.prevAsk = value;
  },

  setGoldBuyPrice: function(price){
    this.goldBuyPrice = price;
  },

  setGoldSellPrice: function(price){
    this.goldSellPrice = price;
  },
convertToGrams: function (value, unit) {
  if (unit === "oz") {
    return value * 31.1035;
  } else if (unit === "kg") {
    return value * 1000;
  } else {
    return "Invalid unit. Please use either 'oz' or 'kg'.";
  }
},

convertGramsToOunces: function (grams) {
  return grams / 31.1035;
},

calculateGoldPrice: function (pricePerOz, weightInGrams) {
  return pricePerOz * (weightInGrams / 31.1035);
},
  
calculatePer: function (value, percentage) {
  // Convert the percentage to a decimal
  const decimal = percentage / 100;

  // Calculate the new value
  const newValue = value + value * decimal;

  return newValue.toFixed(2)
}

}