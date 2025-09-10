import { useTodos } from "../../hooks/useToDo";

function SearchBar() {
  const { fullState, actions } = useTodos();
  const inputState = fullState.length === 0;

  return (
    <div className="grow mr-4">
      <input
        disabled={inputState}
        id="search"
        type="text"
        placeholder="Search note ..."
        className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-colors h-11"
        onChange={(e) => actions.searchItem(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
