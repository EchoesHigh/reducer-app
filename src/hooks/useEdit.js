export const useEdit = (handleUpdate, handleReadClick, contacto) => {
  const handleEditFinished = (e, contacto, nameInputID, numberInputID) => {
    handleReadClick(e);
    handleUpdate(contacto.pos, nameInputID, numberInputID);
  };

  const handleEnterKeyUpdate = (e, contacto, nameInputID, numberInputID) => {
    if (e.key === "Enter") {
      handleReadClick(e);
      handleUpdate(contacto.pos, nameInputID, numberInputID);
    }
  };

  const nameInputID = `name${contacto.id}`;

  const numberInputID = `number${contacto.id}`;

  return [handleEditFinished, handleEnterKeyUpdate, nameInputID, numberInputID];
};
