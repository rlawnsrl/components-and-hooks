export const useConfirm = (
  message: string,
  callback: Function,
  rejection?: Function
) => {
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return confirmAction;
};
