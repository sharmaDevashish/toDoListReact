import { useState } from "react";

type Props = {
  toDoList: string[];
  editEntry: (item: string, index: number) => void;
  deleteEntry: (item: string) => void;
};

export default function ToDoList({ toDoList, editEntry, deleteEntry }: Props) {
  const [showLabelIndex, setShowLabelIndex] = useState<number>();

  const checkIndex = (index: number) => {
    let result = false;
    if (showLabelIndex === index) {
      result = true;
      return result;
    }
  };

  return (
    <div>
      <label>To Do Items</label>
      {toDoList.map((item, index) => {
        return (
          <div key={index}>
            {!checkIndex(index) && (
              <div>
                <label>{item}</label>
                <button
                  onClick={() => {
                    setShowLabelIndex(index);
                  }}
                >
                  Edit
                </button>
              </div>
            )}
            {checkIndex(index) && (
              <div>
                <input
                  value={item}
                  onChange={(e) => editEntry(e.target.value, index)}
                />
                <button
                  onClick={() => {
                    setShowLabelIndex(-1);
                  }}
                >
                  Save
                </button>
              </div>
            )}
            <button
              onClick={() => {
                deleteEntry(item);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
