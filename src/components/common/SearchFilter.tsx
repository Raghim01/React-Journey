import { FilterPicker } from "../filters/FilterPicker";
import { SearchBar } from "../filters/SearchBar";
import CategoryIcon from "../../assets/category.svg";
import SortIcon from "../../assets/sort.svg";

import { categories, sortings } from "../../constants/filters";

export function SearchAndFilter() {
  return (
    <div className="search-and-filter">
      <SearchBar />
      <div className="dropdown-filters">
        <FilterPicker
          icon={<CategoryIcon />}
          menuItems={categories}
          label="Category"
        />
        <FilterPicker
          icon={<SortIcon />}
          menuItems={sortings}
          label="Sort By"
        />
      </div>
    </div>
  );
}
