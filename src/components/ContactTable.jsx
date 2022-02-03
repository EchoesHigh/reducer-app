import React, { useState } from "react";
import { useData } from "../hooks/useData";
import { useSort } from "../hooks/useSort";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

const ContactTable = ({ contactos = [], dispatch }) => {
  const [, , handleDelete, handleUpdate, handleSort] = useData(dispatch);

  const [editContactID, setEditContactID] = useState(null);

  const [sortToggle, handleSortClick, handleEditClick, handleReadClick] = useSort(handleSort, setEditContactID);
  return (
    <div>
      <div className="contacts__table">
        <table className="table table-hover align-middle contacts__table-data">
          <thead>
            <tr>
              <th className="contacts__table-data_pos">#</th>
              <th className="contacts__table-data_ID">ID</th>
              <th className="contacts__table-data_name">
                {sortToggle === "AZ" ? (
                  <i
                    className="bi bi-sort-alpha-down"
                    style={{ fontStyle: "normal" }}
                    onClick={handleSortClick}
                  >
                    {" "}
                    Name
                  </i>
                ) : (
                  <i
                    className="bi bi-sort-alpha-up-alt"
                    style={{ fontStyle: "normal" }}
                    onClick={handleSortClick}
                  >
                    {" "}
                    Name
                  </i>
                )}
              </th>
              <th className="contacts__table-data_number">Number</th>
              <th className="contacts__table-data_btns">Action</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => {
              const finalID = contacto.id.split("-");
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
      <div className="contacts__table-circle4"></div>
      <div className="contacts__table-circle5"></div>
      <div className="contacts__table-circle6"></div>
      <div className="contacts__table-circle7"></div>
      <div className="contacts__table-circle8"></div>
      <div className="contacts__table-circle9"></div>
      <div className="contacts__table-circle10"></div>
      <div className="contacts__table-circle11"></div>
      <div className="contacts__table-circle12"></div>
      <div className="contacts__table-circle13"></div>
    </div>
  );
};

export default ContactTable;
