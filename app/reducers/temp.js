export default function temp(state = {}, action) {
  state = {rhymes: ["testwort"]};
  switch (action.type) {
    case 'GET_RHYME_SUCCESSFUL':
      return Object.assign({}, action.word);
    default:
      return state;
  }
}
