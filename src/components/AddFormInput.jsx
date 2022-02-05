import React from "react";
import { useInput } from "../hooks/useInput";
import { useWarning } from "../hooks/useWarning";

const AddFormInput = ({
  path,
  input,
  ph,
  name,
  onInput,
  type,
  onKeyUp,
  caption,
  setCaption,
}) => {
  const [changeInput, handleEnterKey, code] = useInput(
    path,
    input,
    ph,
    onInput,
    onKeyUp,
    caption,
    setCaption
  );

  const [warning, handleMaxLength] = useWarning(type);

  return (
    <div>
      <div className="contacts__navbar-menu_container mt-1">
        <div
          id={`${ph}`}
          className="placeholdere contacts__navbar-menu_placeholder"
        >
          {ph}
        </div>
        <svg
          viewBox="0 0 320 30"
          width="220"
          height="22"
          className="contacts__navbar-menu_input-underline"
        >
          <path id={`${path}`} stroke="#FFBB00" strokeWidth="2" fill="none" />
        </svg>
        <input
          id={`${input}`}
          className="contacts__navbar-menu_input"
          type={`${type}`}
          autoComplete="off"
          onChange={changeInput}
          name={`${name}`}
          onKeyUp={handleEnterKey}
          placeholder={ph === "NUMBER" && caption ? `${code}` : ""}
          onChangeCapture={handleMaxLength}
        />
        {warning && (
          <p className="contacts__navbar-menu_input-warning">
            Maximum 15 Digits
          </p>
        )}
      </div>
    </div>
  );
};

export default AddFormInput;
