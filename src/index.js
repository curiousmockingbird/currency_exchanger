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
  //Date
  document.getElementById("date").innerHTML = response["time_last_update_utc"];
  // From (x2)
  document.querySelector("span[name='from1']").innerHTML = from;
  document.querySelector("span[name='from2']").innerHTML = from;
  // To (x2)
  document.querySelector("span[name='to1']").innerHTML = to;
  document.querySelector("span[name='to2']").innerHTML = to;
  // Rate
  document.getElementById("rate").innerHTML = response["conversion_rate"];
  // Amount
  document.getElementById("amount").innerHTML = amount;
  // Conversion result
  document.getElementById("conv-Result").innerHTML = response["conversion_result"];

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