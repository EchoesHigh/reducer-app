import React from "react";
import { useData } from "../hooks/useData";
import "../styles/AddForm.css";
import AddFormInput from "./AddFormInput";

const AddForm = ({ state, dispatch }) => {
  const [handleChange, handleAdd] = useData(dispatch, state);

  return (
    <>
      <div className="container">
        <AddFormInput
          path={"Name"}
          input={"name"}
          ph={"NAME"}
          name={"name"}
          onInput={handleChange}
          type={"text"}
          onKeyUp={handleAdd}
        />
        <AddFormInput
          path={"Number"}
          input={"number"}
          ph={"NUMBER"}
          name={"number"}
          onInput={handleChange}
          type={"number"}
          onKeyUp={handleAdd}
        />
        <div className="mx-1 d-grid gap-2 d-flex justify-content-end contacts__navbar-menu_button-container">
          <span className="btn mt-4 mb-2 shadow-none w-50 contacts__navbar-menu_button-animation">
            ADD
          </span>
          <button
            onClick={handleAdd}
            className="btn mt-4 mb-2 shadow-none w-50 contacts__navbar-menu_button"
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default AddForm;
