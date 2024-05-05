import { useFileAsURL } from "@src/shared/hooks";

export const UseFileAsURL = () => {
  const { url, inputRef } = useFileAsURL();

  return (
    <div className="flex flex-col items-center">
      <input ref={inputRef} type="file" name="" id="" accept="image/*" />

      <div>
        <img src={url} alt="" />
      </div>
    </div>
  );
};
