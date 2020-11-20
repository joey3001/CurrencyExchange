export default class ExchangeFetch {

  static async currencyCall() {
    try { 
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
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
    console.log(response);
    console.log(response.conversion_rates[currency]);
    console.log(money);
    console.log((parseFloat(money)*response.conversion_rates[currency]).toFixed(2));
  }

  static async makeApiCall(money, currency) {
    const response = await ExchangeFetch.currencyCall();
    ExchangeFetch.getElements(response, money, currency); 
  }
}

