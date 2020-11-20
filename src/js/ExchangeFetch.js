import $ from 'jquery'
export default class ExchangeFetch {

  static async currencyCall() {
    try { 
      const response = await fetch (`https://v6.exchangerate-pi.com/v6/${process.env.API_KEY}/latest/KGB/`);
      if (!response.ok) {
        throw Error(response.statusText); 
      }
      return response.json();
    } 
    catch(error) {
      console.log('maybe here')
      return(error.message);
    }
  }

  static getElements(response, money, currency) {
    console.log(response);
    if (response.conversion_rates.currency) {
      $('#output').text((parseFloat(money)*response.conversion_rates[currency]).toFixed(2));
    }
    else if (response.conversion_rates) {
      $('#output').text('That is not a currency supported by this application. Please try another currency');
    }
    else {
      $('#output').text(`There was the following error: ${response}`);
    }
  }

  static async makeApiCall(money, currency) {
    const response = await ExchangeFetch.currencyCall();
    ExchangeFetch.getElements(response, money, currency); 
  }
}

