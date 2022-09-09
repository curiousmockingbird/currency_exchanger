import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange_calcService from './js/exchange_calc.js';


function exchange_calc() {
  let promise = Exchange_calcService();
  promise.then(function(calcDataArray) {
    printElements(calcDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

function printElements(){

}

function printError() {

}

function handleTriangleForm(event) {
  event.preventDefault();
  exchange_calc();
  
}

window.addEventListener("load", function() {
  document.querySelector("#exchCalc-form").addEventListener("submit", handleTriangleForm);
});