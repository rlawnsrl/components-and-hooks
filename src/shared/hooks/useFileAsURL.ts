// browser only

import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

export function useFileAsURL() {
  const [url, setUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>();

  const onChange = (e): ChangeEventHandler<HTMLInputElement> => {
    const file = inputRef.current.files[0];

    URL.revokeObjectURL(url);
    if (file) {
      setUrl(URL.createObjectURL(file));
      return;
    }

    setUrl("");
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("change", onChange);
      return () => {
        inputRef.current.removeEventListener("change", onChange);
      };
    }
  });

  return { url, inputRef };
}
