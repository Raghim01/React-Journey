import { SearchAndFilter } from "../components/common/SearchFilter";
import { UserHeaderComponent } from "../components/common/UserHeadert";

export function Tasks() {
  return (
    <div className="tasks">
      <UserHeaderComponent label="Eplore Tasks" />
      <SearchAndFilter />
    </div>
  );
}
