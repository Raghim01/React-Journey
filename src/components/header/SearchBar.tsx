function SearchBar() {
  return (
    <div className="flex-grow mr-4">
      <input
        id="search"
        type="text"
        placeholder="Search note ..."
        className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-colors h-11"
      />
    </div>
  );
}

export default SearchBar;
