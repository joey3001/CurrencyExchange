export default class ExchangeFetch {

  static async currencyCall() {
    try { 
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/EUR`);
      if (!response.ok) {
        throw Error(response.statusText); 
      }
    } catch(error) {
      alert(error.message);
    }
  }
}

