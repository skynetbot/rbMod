calculateOnBudget(100);
//calculateStockTotal(3);

function calculateStockTotal(divideCashBy) {
  var cleaned = cleanPriceCash();
  var stockAmount = Math.floor((cleaned[1]/divideCashBy)/(cleaned[0]+(cleaned[0]*.05)));
  displayResults(stockAmount);
}
function calculateOnBudget(budget) {
  var cleaned = cleanPriceCash();
  var stockAmount = Math.floor((budget)/(cleaned[0]+(cleaned[0]*.05)));
  displayResults(stockAmount);
}
function cleanPriceCash() {
  var dollarSign = /\$/;
  var whiteSpace = /\s/;
  var price = Number(document.getElementsByClassName("_2cvSOo1pDo1jI9bNeDTKWw")[0].innerHTML.split(dollarSign)[1]);
  var cash = Number(document.getElementsByClassName("_3iDVAJ4p68vnplRlLcukB0")[0].innerHTML.split(whiteSpace)[0].split(dollarSign)[1]);
  var cleaned = [];
  cleaned[0] = price;
  cleaned[1] = cash;
  return cleaned;
}
function displayResults(stockAmount) {
  //var stockAmountElement = document.getElementsByClassName("_3SRrvWcEtTODZEancic0ns")[0].innerHTML;
  //document.getElementsByClassName("_3SRrvWcEtTODZEancic0ns")[0].innerHTML = stockAmountElement + 
      //"<div>You can purchase "+stockAmount+" shares.</div>";
  var stockAmountElement = document.getElementsByClassName("Jo5RGrWjFiX_iyW3gMLsy")[0].innerHTML;
  document.getElementsByClassName("Jo5RGrWjFiX_iyW3gMLsy")[0].innerHTML = stockAmountElement + 
      "<div>You can purchase "+stockAmount+" shares.</div>";
}
function test() {
  var test = cleanPriceCash();
  alert(test[1]);
}