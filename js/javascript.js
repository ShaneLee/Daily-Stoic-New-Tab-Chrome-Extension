loadJSon();

function loadJSon() {
  var request = new XMLHttpRequest();
  var requestURL = 'quotes.json';
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var quotes = request.response;
    getQuote(quotes);
    // deathCountdown();
  }
}

function getQuote(jsonObj) {
  var quotes = jsonObj.quotes;

  var quoteObj = quotes[Math.floor(Math.random() * quotes.length - 1) + 0];
  var quoteAuthor = quoteObj.author;
  var quote = quoteObj.quote;
  printQuote(quoteAuthor, quote);
}

function printQuote(quoteAuthor, quote) {

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = quoteAuthor;
}

// function deathCountdown() {
//   var deathDate = moment("2075-03-28");
//   var today = moment();
//   var days = deathDate.diff(today, 'days').toLocaleString('en');
//   document.getElementById("deathCountdown").innerHTML =
//     "You have ".toUpperCase() + days + " days remaining.".toUpperCase();
//   document.getElementById("title").innerHTML = days + " Days Left";
//
// }
