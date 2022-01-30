import React, { useState } from "react";
import { useData } from "../hooks/useData";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

const ContactTable = ({ contactos = [], dispatch }) => {
  const [, , handleDelete, handleUpdate] = useData(dispatch);

  const [editContactID, setEditContactID] = useState(null);

  const handleEditClick = (e, contacto) => {
    e.preventDefault();
    setEditContactID(contacto.id);
  };

  const handleReadClick = (e) => {
    e.preventDefault();
    setEditContactID(null);
  };

  return (
    <div>
      <div className="contacts__table">
        <table className="table table-hover align-middle contacts__table-data">
          <thead>
            <tr>
              <th>#</th>
              <th className="contacts__table-data_ID">ID</th>
              <th>Name</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => {
              const finalID = contacto.id.split("-");
              console.log(finalID[0]);
              console.log(contacto.id);
              const match = contacto.number.match(
                /^(\d{2})(\d{2})(\d{4})(\d{4})$/
              );
              return (
                <>
                  {editContactID === contacto.id ? (
                    <EditableRow
                      key={finalID[0]}
                      contacto={contacto}
                      finalID={finalID}
                      handleUpdate={handleUpdate}
                      handleReadClick={handleReadClick}
                      handleDelete={handleDelete}
                    />
                  ) : (
                    <ReadOnlyRow
                      key={contacto.id}
                      contacto={contacto}
                      finalID={finalID}
                      match={match}
                      handleEditClick={handleEditClick}
                      handleDelete={handleDelete}
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="contacts__table-circle1"></div>
      <div className="contacts__table-circle2"></div>
      <div className="contacts__table-circle3"></div>
    </div>
  );
};

export default ContactTable;
