function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function randomWords(state = [], action) {
  switch (action.type) {
      case 'SHUFFLE':
      return [...shuffle(state)];
    default:
      return state;
  }
}
