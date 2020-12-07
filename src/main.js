import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeFetch from './js/ExchangeFetch.js';

function getElements(response, money, currency) {
  if (response.conversion_rates) {
    if (response.conversion_rates[currency]) {
      $('#output').text('The exchanged value is: ' + (parseFloat(money)*response.conversion_rates[currency]).toFixed(2));
    }
    else {
      $('#output').text('That is not a currency supported by this application. Please try another currency');
    }
  }
  else if (typeof(response) === 'object') {
    $('#output').text(`There was the following error: ${response['error-type']}`);
  }
  else {
    $('#output').text(`There was the following error: ${response}`);
  }
  $('#output').fadeIn('slow');
}

async function makeApiCall(money, currency) {
  const response = await ExchangeFetch.currencyCall();
  getElements(response, money, currency); 
}

$('#exchange').submit(function() {
  event.preventDefault(); 
  let money = $('#money').val(); 
  let currency = $('#alternateCurrency').val();
  makeApiCall(money, currency);
});