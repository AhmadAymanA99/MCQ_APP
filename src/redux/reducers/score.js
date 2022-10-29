const Score = (state = 0, action) => {
  switch (action.type) {
    case "SET_SCORE":
      return action.score;
    default:
      return state;
  }
};

export default Score;
