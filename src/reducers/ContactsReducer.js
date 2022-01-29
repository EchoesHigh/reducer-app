export const ContactsReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      state = state.filter((actual) => actual.id !== action.payload);
      for (let i = 0; i < state.length; i++) {
        state[i].pos = i + 1;
      }
      return state;

    default:
      return state;
  }
};
