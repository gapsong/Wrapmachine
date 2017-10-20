export function getRhymes(word) {
  return (dispatch) => {
    return fetch('/rhymes', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({word: word})
    }).then((response) => {
      return response.json().then(function(json) {
        return dispatch({type: 'GET_RHYME_SUCCESSFUL', word: json});//Action wird getriggert
      });
    });
  }
}
