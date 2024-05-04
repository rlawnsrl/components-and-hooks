import { useClick } from "@src/shared/hooks";

export const UseClick = () => {
  const onClick = () => console.log("hello");
  const title = useClick<HTMLDivElement>(onClick);

  return (
    <div className="flex flex-col items-center">
      <div ref={title} className="text-4xl">
        Hi
      </div>
    </div>
  );
};
