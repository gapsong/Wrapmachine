export default function temp(state = {}, action) {
  switch (action.type) {
    case 'GET_RHYME_SUCCESSFUL':
    //TODO hier muss das array erstellt werden
      console.log("test: ", action.word);

      return Object.assign({}, action.word);
    default:
      return state;
  }
}
