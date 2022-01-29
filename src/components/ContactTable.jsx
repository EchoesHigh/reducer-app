import React from "react";
import { useData } from "../hooks/useData";

const ContactTable = ({ contactos = [], dispatch }) => {
  const [, , handleDelete] = useData(dispatch);

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
              const match = contacto.number.match(
                /^(\d{2})(\d{2})(\d{4})(\d{4})$/
              );
              return (
                <tr key={contacto.id}>
                  <th>{contacto.pos}</th>
                  <th className="contacts__table-data_ID">{finalID[0]}</th>
                  <td>{contacto.name}</td>
                  <td>{`(${match[1]}) ${match[2]} ${match[3]} ${match[4]}`}</td>
                  <td>
                    <button
                      className="btn contacts__table-wabtn"
                      onClick={() =>
                        window.open(
                          `https://api.whatsapp.com/send?phone=${contacto.number}&text=`
                        )
                      }
                    >
                      <i className="bi bi-whatsapp"></i>
                    </button>
                    <button className="btn contacts__table-updatebtn">
                      <i className="bi bi-gear"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(contacto.id)}
                      className="btn contacts__table-deletebtn"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
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
