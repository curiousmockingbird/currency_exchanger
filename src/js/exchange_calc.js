export default class Exchange_calcService {
  static getAPIresponse(from, to, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} -- This currency doesn't exit!`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })      
      .catch(function(error) {
        return error;
      });
  }
}