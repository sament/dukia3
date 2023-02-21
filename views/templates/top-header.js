
// function per(num, per) { return (num/100)*per; }

function calculatePer(value, percentage) {
  console.log("calc per");
  // Convert the percentage to a decimal
  const decimal = percentage / 100;

  // Calculate the new value
  const newValue = value + value * decimal;

  return newValue;
}

function getGoldPrices() {
  const request = new XMLHttpRequest();
  request.open('GET', 'live.php', true);
  console.log("fetching");
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log("fetched");
      const response = JSON.parse(request.responseText);
      
      const newBidR = parseFloat(response.bid);// * 111.14%;
      const newAskR = parseFloat(response.ask);// * 99%;

  console.log("Bid: " + newBidR + ", Ask: " + newAskR);
  
      const newBid = util.calculatePer(newBidR, -1);
      
  const newAsk = util.calculatePer(newAskR, 11.14);
      
//util.setGoldBuyPrice(newAsk);
//util.setGoldSellPrice(newBid);

      let bidClass = 'text-success';
      let askClass = 'text-success';

      if (newBid < util.prevBid) {
        bidClass = 'text-danger';
      } else if (newBid > util.prevBid) {
        bidClass = 'text-success';
      }

      if (newAsk < util.prevAsk) {
        askClass = 'text-danger';
      } else if (newAsk > util.prevAsk) {
        askClass = 'text-success';
      }

      const fbid = newBid.toLocaleString();
      const fask = newAsk.toLocaleString();

      document.getElementById('liveBuyPrice').textContent = `$${fask}/oz`;
      document.getElementById('liveBuyPrice').className = askClass;
      document.getElementById('liveBuyPricePercent').textContent = `(${((newAsk - util.prevAsk) / util.prevAsk * 100).toFixed(2)}%)`;

      document.getElementById('liveSellPrice').textContent = `$${fbid}/oz`;
      document.getElementById('liveSellPrice').className = bidClass;
      document.getElementById('liveSellPricePercent').textContent = `(${((newBid - util.prevBid) / util.prevBid * 100).toFixed(2)}%)`;

      $("#liveBuyPrice").show();
      $("#liveSellPrice").show();
      //$("#liveSellPricePercent").show();
//$("#liveBuyPricePercent").show();
      
      util.setPrevBid(newBid);
      util.setPrevAsk(newAsk);
setTimeout(getGoldPrices, 7000); // call function again after 7 sec
    }
  };
  
  request.send();
}

getGoldPrices();
