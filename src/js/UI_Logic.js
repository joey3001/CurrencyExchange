import $ from 'jquery';
export default function getElements(response, money, currency) {
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