import { useState } from "react";

const init = () => {
  const nameSort = localStorage.getItem("nameSort");

  return JSON.parse(nameSort) === "AZ" ? "ZA" : "AZ";
};

export const useSort = (handleSort, setEditContactID) => {
  const [sortToggle, setSortToggle] = useState(init());

  const handleSortClick = () => {
    handleSort(sortToggle);
    localStorage.setItem("nameSort", JSON.stringify(sortToggle));
    sortToggle === "AZ" ? setSortToggle("ZA") : setSortToggle("AZ");
  };

  const handleEditClick = (e, contacto) => {
    e.preventDefault();
    setEditContactID(contacto.id);
  };

  const handleReadClick = (e) => {
    e.preventDefault();
    setEditContactID(null);
  };

  return [sortToggle, handleSortClick, handleEditClick, handleReadClick];
};
