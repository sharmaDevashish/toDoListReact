import { useState } from "react";

type Props = {
  addToList: (value: string) => void;
};

export default function ToDoListHead({ addToList }: Props) {
  const [currentListVal, setCurrentListVal] = useState<string>("");

  return (
    <div>
      <label>To Do List</label>
      <br />
      <input
        placeholder="Add To List"
        type="string"
        onChange={(e) => setCurrentListVal(e.target.value)}
      />
      <button onClick={() => addToList(currentListVal)}>Add</button>
    </div>
  );
}
