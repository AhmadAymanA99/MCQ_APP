const UserInfo = (state = "Guest", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.name ? action.name : "Guest";
    default:
      return state;
  }
};

export default UserInfo;
