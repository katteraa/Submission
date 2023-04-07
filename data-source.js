class DataSource {
  static searchClub(keyword) {
    return fetch(`https://www.fruityvice.com/api/fruit/all${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson) {
            return Promise.resolve(responseJson);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSource;