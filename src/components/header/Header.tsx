import DropDownMenu from "./DropDown";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto px-6 pt-8">
      <h1 className="pb-6 pt-8 text-2xl text-center font-bold">TODO LIST</h1>
      <div className="flex items-center justify-between">
        <SearchBar />
        <DropDownMenu />
      </div>
    </header>
  );
}

export default Header;
