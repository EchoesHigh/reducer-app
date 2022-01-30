import React from "react";

const ReadOnlyRow = ({
  contacto,
  finalID,
  match,
  handleEditClick,
  handleDelete,
}) => {
  return (
    <tr>
      <th className="contacts__table-data_pos">{contacto.pos}</th>
      <th className="contacts__table-data_ID">{finalID[0]}</th>
      <td className="contacts__table-data_name">{contacto.name}</td>
      <td className="contacts__table-data_number">
        {contacto.number.length === 12
          ? `(${match[1]}) ${match[2]} ${match[3]} ${match[4]}`
          : contacto.number}
      </td>
      <td className="contacts__table-data_btns">
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
        <button
          onClick={(e) => handleEditClick(e, contacto)}
          className="btn contacts__table-updatebtn"
        >
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
};

export default ReadOnlyRow;
