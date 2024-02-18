var request = require("request");
//##############################################################

const convert = () => {
  //################

  var headers = {
    "User-Agent": "CURRENCY CONVERTER API Client/0.0.1",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  //################

  var options = {
    url: "https://api.iban.com/clients/api/currency/convert/",
    method: "POST",
    headers: headers,
    form: {
      api_key: "[YOUR_API_KEY]",
      format: "json",
      from: "USD",
      to: "EUR",
      amount: 120,
    },
  };
  //################

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      console.log(data.errors);
      console.log("Rate Updated: " + data.time);
      console.log("Conversion Rate: " + data.rate);
      console.log("120 USD equals " + data.convert_result + " EUR");
    }
  });
};
//##############################################################

const ExchangeRates = () => {
  var headers = {
    "User-Agent": "CURRENCY RATES API Client/0.0.1",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  var options = {
    url: "https://api.iban.com/clients/api/currency/rates/",
    method: "POST",
    headers: headers,
    form: { api_key: "[YOUR_API_KEY]", format: "json", currency: "USD" },
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      console.log(data.errors);
      console.log("Base Currency: " + data.base_currency);
      console.log("Rates Updated: " + data.time);
      console.log("USD to EUR rate " + data.rates.EUR);
    }
  });
};
