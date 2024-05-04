import { useTabs } from "@src/shared/hooks";

const content = [
  {
    tab: "Section 1",
    content:
      "(1)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    tab: "Section 2",
    content:
      "(2)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
];

export const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="flex flex-col items-center">
      {content.map((section, index) => (
        <button onClick={changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
