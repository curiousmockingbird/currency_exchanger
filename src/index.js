import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange_CalcService from './js/exchange_calc.js';


function exchange_Calc(from, to, amount) {
  Exchange_CalcService.getAPIresponse(from, to, amount)
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

  // Unhide response div
  document.getElementById("response").removeAttribute("class", "hidden");
  // Keep error message span hidden
  document.getElementById("error").setAttribute("class", "hidden");
  // Unhide conversion results
  document.getElementById("responseContent").removeAttribute("class");
}

function printError(error, from, to, amount) {
  document.getElementById("error").innerHTML = ` You tried to convert ${amount} ${from} to ${to}. ${error}`;

  if (from === "ABC" || to === "XYZ") {
    document.getElementById("error").removeAttribute("class", "hidden");
    document.getElementById("responseContent").setAttribute("class", "hidden");
  }
}

function handleFormSubmission(event) {
  event.preventDefault();

  const amount = parseInt(document.getElementById("amount-Input").value);  
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  exchange_Calc(from, to, amount);

  // Reset form
  document.querySelector("#exchCalc-form").reset();
}

window.addEventListener("load", function () {
  document.querySelector("#exchCalc-form").addEventListener("submit", handleFormSubmission);
});