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

    case "update":
      const name = action.payload.nameVal;
      const number = action.payload.numberVal;
      const pos = action.payload.pos - 1;
      state[pos].name = name;
      state[pos].number = number;
      localStorage.setItem("contactsInfo", JSON.stringify(state));
      return state;

    case "sortAZ":
      if (action.payload === "AZ") {
        state.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "ZA") {
        state.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      }
      for (let i = 0; i < state.length; i++) {
        state[i].pos = i + 1;
      }
      localStorage.setItem("contactsInfo", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
