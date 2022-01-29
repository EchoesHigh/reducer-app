import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useData = (dispatch, state) => {
  // console.log(state);
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

  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };

    dispatch(deleteAction);
  };

  return [handleChange, handleAdd, handleDelete];
};
