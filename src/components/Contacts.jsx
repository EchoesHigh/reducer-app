import React from "react";
import { useHeight } from "../hooks/useHeight";
import ContactTable from "./ContactTable";

const Contacts = ({ state, dispatch }) => {
  const [desiredHeight] = useHeight();
  return (
    <div className="contacts__background">
      <div
        className="container mt-3 contacts__table-container"
        style={{ minHeight: `${desiredHeight}px` }}
      >
        <ContactTable contactos={state} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Contacts;
