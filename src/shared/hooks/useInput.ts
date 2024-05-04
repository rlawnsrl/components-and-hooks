import { ChangeEvent, useState } from "react";

export const useInput = <T>(initialValue: T, validator?: (v: T) => boolean) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const updatedValue = event.target.value;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(updatedValue);
    }

    if (willUpdate) {
      setValue(event.target.value);
    }
  };

  return { value, onChange };
};
