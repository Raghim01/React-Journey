import { useState } from "react";
import type { TodoItemState } from "./reducer";
import { useTodos } from "../../hooks/useToDo";

type TodoItemProps = {
  item: TodoItemState;
};

function TodoItem({ item }: TodoItemProps) {
  const { actions } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.title);

  function handleEditClick() {
    setIsEditing(true);
    setEditText(item.title);
  }

  function handleEditText(e: React.ChangeEvent<HTMLInputElement>) {
    setEditText(e.target.value);
  }

  function handleSaveClick() {
    const value = editText.trim();

    if (!value.length) {
      alert("Please enter a title");
      setIsEditing(true);
      setEditText(item.title);
      return;
    }

    setIsEditing(false);
    actions.updateItem(item.id, value);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditText(item.title);
  }

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <input
        checked={item.completed}
        type="checkbox"
        className="w-8 h-8"
        onChange={(e) => actions.toggleItem(item.id, e)}
      />
      {isEditing ? (
        <input
          value={editText}
          onChange={handleEditText}
          className="w-full border-2 border-purple-400 rounded-md outline-none focus:ring-2 focus:ring-purple-500 ml-4 text-4xl mx-auto"
        ></input>
      ) : (
        <span
          className={
            item.completed
              ? "text-gray-400 ml-4 text-4xl mx-auto line-through"
              : "ml-4 text-4xl mx-auto"
          }
        >
          {item.title}
        </span>
      )}
      {isEditing ? (
        <div className="flex space-x-2">
          <button onClick={handleSaveClick} className="ml-4 text-xl">
            ✅
          </button>
          <button onClick={handleCancelEdit} className="ml-4 text-xl">
            ❌
          </button>
        </div>
      ) : (
        <div className="flex space-x-2">
          <button onClick={handleEditClick} className="ml-4 text-xl">
            ✏️
          </button>
          <button
            onClick={() => actions.deleteItem(item.id)}
            className="ml-4 text-xl"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
