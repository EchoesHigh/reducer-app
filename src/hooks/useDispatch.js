import { useEffect, useReducer } from "react";
import { ContactsReducer } from "../reducers/ContactsReducer";

const init = () => {
  const contactsInfo = localStorage.getItem("contactsInfo");
  return contactsInfo ? JSON.parse(contactsInfo) : [];
};

export const useDispatch = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactsInfo", JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};
