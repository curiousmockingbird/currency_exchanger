import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange_calcService from './js/exchange_calc.js';


function exchange_calc(from, to, amount) {
  Exchange_calcService.getAPIresponse(from, to, amount)
    .then(function (response) {

      if (response.result === "success") {
        printElements(response, from, to, amount);
      } else {
        printError(response, from, to, amount);
      }
    });
}

function printElements(response, from, to, amount) {
  console.log("Response for success " + response["conversion_result"] + "From " + from + "To " + to + "Amount " + amount);

}

function printError(error, from, to, amount) {
  console.log("Response for error " + error + + "From " + from + "To " + to + "Amount " + amount);

}

function handleTriangleForm(event) {
  event.preventDefault();
  console.log.apply("Hey");

  const amount = parseInt(document.getElementById("amount-Input").value);  
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  exchange_calc(from, to, amount);

}

window.addEventListener("load", function () {
  document.querySelector("#exchCalc-form").addEventListener("submit", handleTriangleForm);
});