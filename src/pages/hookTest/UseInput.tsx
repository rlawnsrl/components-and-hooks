import { useInput } from "@src/shared/hooks";

export const UseInput = () => {
  // const maxLen = (value) => value.length <= 10;
  const notAtSign = (value) => !value.includes("@");
  const name = useInput("Mr..", notAtSign);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl my-4">Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
