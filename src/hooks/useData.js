import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useData = (dispatch, state) => {
  const inputName = document.getElementById("name");

  const inputNumber = document.getElementById("number");

  const [data, setData] = useState({ name: "", number: "" });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const actionAdd = {
      type: "add",
      payload: {
        pos: state.length + 1,
        id: uuid(),
        name: data.name,
        number: data.number,
      },
    };
    if (inputName.value !== "" && inputNumber.value !== "") {
      dispatch(actionAdd);
      inputName.value = "";
      inputNumber.value = "";
    } else {
      console.log("You cannot add the contact");
    }
  };

  const handleSort = (sortToggle) => {
    const sortAZAction = {
      type: "sortAZ",
      payload: sortToggle,
    };

    dispatch(sortAZAction);
  };

  const handleUpdate = (pos, nameInputID, numberInputID) => {
    const nameID = document.getElementById(nameInputID);
    const numberID = document.getElementById(numberInputID);
    const nameValue = nameID.value;
    const numberValue = numberID.value;

    const updateAction = {
      type: "update",
      payload: {
        pos: pos,
        nameVal: nameValue,
        numberVal: numberValue,
      },
    };

    dispatch(updateAction);
  };

  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };

    dispatch(deleteAction);
  };

  return [handleChange, handleAdd, handleDelete, handleUpdate, handleSort];
};
