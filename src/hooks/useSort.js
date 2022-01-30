import { useState } from "react";

export const useSort = (handleSort, setEditContactID) => {
  const [sortToggle, setSortToggle] = useState("AZ");

  const handleSortClick = () => {
    handleSort(sortToggle);
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
