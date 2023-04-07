class DataSource {
  static searchClub(keyword) {
    return fetch(`https://al-quran-8d642.firebaseio.com/surat/1.json?print=pretty${keyword}`)
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