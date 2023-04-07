class DataSource {
  static searchClub(keyword) {
    return fetch(`https://www.fruityvice.com/api/fruit=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.fruits) {
            return Promise.resolve(responseJson.fruits);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSource;