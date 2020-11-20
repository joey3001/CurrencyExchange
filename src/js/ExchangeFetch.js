import $ from 'jquery'
export default class ExchangeFetch {

  static async currencyCall() {
    try { 
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD/`);
      if (!response.ok) {
        throw Error(response.statusText); 
      }
      return response.json();
    } 
    catch(error) {
      return(error.message);
    }
  }

  static getElements(response, money, currency) {
    if (response.conversion_rates) {
    $('#output').text((parseFloat(money)*response.conversion_rates[currency]).toFixed(2));
    }
    else {
    console.log(response);
    $('#output').text(`There was the following error: ${response}`);
    }
  }

  static async makeApiCall(money, currency) {
    const response = await ExchangeFetch.currencyCall();
    ExchangeFetch.getElements(response, money, currency); 
  }
}

