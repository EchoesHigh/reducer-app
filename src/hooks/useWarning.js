import { useState } from "react";

export const useWarning = (type) => {
  const [warning, setWarning] = useState(false);

  const handleMaxLength = (e) => {
    const val = e.target.value;
    const max = 999999999999999;
    const maxLength = max.toString().length;
    val >= max ? setWarning(true) : setWarning(false);
    const newVal =
      val < max ? val : parseInt(val.toString().substring(0, maxLength));
    if (type === "number") {
      e.target.value = newVal;
    }
  };

  return [warning, handleMaxLength];
};
