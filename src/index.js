import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange_calcService from './js/exchange_calc.js';


function exchange_calc(currency) {
  Exchange_calcService.getAPIresponse(currency)
    .then(function (response) {
      //console.log("Response for success " + response.result + "Currency" + currency);

      if (response) {
        printElements(response, currency);
      } else {
        printError(response, currency);
      }
    });
}

function printElements(response, currency) {
  console.log("Response for success " + response.result + "Currency" + currency);

}

function printError(error, currency) {
  console.log("Response for error " + error + "Currency" + currency);

}

function handleTriangleForm(event) {
  event.preventDefault();
  console.log.apply("Hey");
  const currency = document.getElementById("currency-Input").value;
  exchange_calc(currency);

}

window.addEventListener("load", function () {
  document.querySelector("#exchCalc-form").addEventListener("submit", handleTriangleForm);
});