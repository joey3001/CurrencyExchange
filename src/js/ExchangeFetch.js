export default class ExchangeFetch {

  static async currencyCall() {
    try { 
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/EUR`);
      if (!response.ok) {
        throw Error(response.statusText); 
      }
      return response.json();
    } 
    catch(error) {
      return(error.message);
    }
  }

  static getElements(response) {
    console.log(response);
  }

  static async makeApiCall() {
    const response = await ExchangeFetch.currencyCall();
    ExchangeFetch.getElements(response); 
  }
}

