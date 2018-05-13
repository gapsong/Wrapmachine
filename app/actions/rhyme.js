export function getRhymes (word) {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    })
    return fetch('/rhymes', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({word: word})
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({type: 'GET_RHYME_SUCCESSFUL', word: json})
        })
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'GET_RHYME_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          })
        })
      }
    })
  }
}
