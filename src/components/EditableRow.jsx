import React from "react";
import { useEdit } from "../hooks/useEdit";
import { SizeMe } from "react-sizeme";
import { useWarning } from "../hooks/useWarning";

const EditableRow = ({
  contacto,
  finalID,
  handleUpdate,
  handleReadClick,
  handleDelete,
}) => {
  const [handleEditFinished, handleEnterKeyUpdate, nameInputID, numberInputID] =
    useEdit(handleUpdate, handleReadClick, contacto);

  const [warning, handleMaxLength] = useWarning("number");

  return (
    <tr>
      <th className="contacts__table-data_pos">{contacto.pos}</th>
      <th className="contacts__table-data_ID">{finalID[0]}</th>
      <td className="contacts__table-data_name">
        <input
          className="contacts__table-data_editable"
          type="text"
          required="required"
          autoComplete="off"
          defaultValue={contacto.name}
          id={nameInputID}
          onKeyUp={(e) =>
            handleEnterKeyUpdate(e, contacto, nameInputID, numberInputID)
          }
        ></input>
      </td>
      <td className="contacts__table-data_number">
        <SizeMe>
          {({ size }) => (
            <div>
              <input
                className="contacts__table-data_editable"
                type="number"
                required="required"
                autoComplete="off"
                defaultValue={contacto.number}
                id={numberInputID}
                onKeyUp={(e) =>
                  handleEnterKeyUpdate(e, contacto, nameInputID, numberInputID)
                }
                onChange={handleMaxLength}
              ></input>
              {warning && (
                <p
                  className="contacts__table-data_editable-warning"
                  style={{ width: `${size.width}px` }}
                >
                  Maximum 15 Digits
                </p>
              )}
            </div>
          )}
        </SizeMe>
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
          onClick={(e) =>
            handleEditFinished(e, contacto, nameInputID, numberInputID)
          }
          className="btn contacts__table-checkbtn"
        >
          <i className="bi bi-check2-circle"></i>
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

export default EditableRow;
