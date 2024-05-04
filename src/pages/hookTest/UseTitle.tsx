import { useTitle } from "@src/shared/hooks";

export const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater("Home"), 3000);

  return (
    <div className="flex flex-col items-center">
      <div>Hi</div>
    </div>
  );
};
