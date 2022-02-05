import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useData = (dispatch, state) => {
  const [data, setData] = useState({ name: "", number: "" });

  const [caption, setCaption] = useState(true);

  const [incomplete, setIncomplete] = useState(true);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    const inputName = document.getElementById("name");
    const inputNumber = document.getElementById("number");
    if (inputName.value !== "" && inputNumber.value !== "") {
      const btnBackground = document.getElementById("AddBtnBackground");
      const btn = document.getElementById("AddBtn");
      btnBackground.classList.remove(
        "contacts__navbar-menu_button-animation_incomplete"
      );
      btnBackground.classList.add("contacts__navbar-menu_button-animation");
      btn.classList.remove("contacts__navbar-menu_button-incomplete");
      btn.classList.add("contacts__navbar-menu_button");
      setIncomplete(true);
    }
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
    const inputName = document.getElementById("name");
    const inputNumber = document.getElementById("number");
    if (inputName.value !== "" && inputNumber.value !== "") {
      inputName.blur();
      inputNumber.blur();
      dispatch(actionAdd);
      inputName.value = "";
      inputNumber.value = "";
      const phName = document.getElementById("NAME");
      const phNumber = document.getElementById("NUMBER");
      phName.classList.remove("expand");
      phName.classList.add("return");
      phNumber.classList.remove("expand");
      phNumber.classList.add("return");
      setCaption(false);
    } else {
      const btnBackground = document.getElementById("AddBtnBackground");
      const btn = document.getElementById("AddBtn");
      btnBackground.classList.remove("contacts__navbar-menu_button-animation");
      btnBackground.classList.add(
        "contacts__navbar-menu_button-animation_incomplete"
      );
      btn.classList.remove("contacts__navbar-menu_button");
      btn.classList.add("contacts__navbar-menu_button-incomplete");
      setIncomplete(false);
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

  return [
    handleChange,
    handleAdd,
    handleDelete,
    handleUpdate,
    handleSort,
    caption,
    setCaption,
    incomplete,
  ];
};
