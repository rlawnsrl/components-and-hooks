import { useConfirm } from "@src/shared/hooks";

export const UseConfirm = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div className="flex flex-col items-center">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
