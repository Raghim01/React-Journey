import { useState } from "react";
import { useTodos } from "../../hooks/useToDo";

type AddItemFormProps = {
  //onAddItem: (title: string) => void;
  onSetFormState: () => void;
};

function AddItemForm({ onSetFormState }: AddItemFormProps) {
  const { actions } = useTodos();
  const [itemText, setItemText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setItemText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    actions.addItem(itemText);
    setItemText("");
    onSetFormState();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 border-2 border-blue-400">
        <h2 className="text-xl font-bold text-center mb-4">NEW NOTE</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Input your note..."
            className="w-full border border-purple-400 rounded-md px-3 py-2 mb-6 outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />

          <div className="flex justify-between">
            <button
              onClick={(e) => {
                e.preventDefault();
                onSetFormState();
              }}
              className="px-4 py-2 border border-purple-400 text-purple-600 font-semibold rounded-md hover:bg-purple-50 transition"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
            >
              APPLY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm;
