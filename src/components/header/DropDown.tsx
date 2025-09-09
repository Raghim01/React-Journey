import { useState, useRef, useEffect } from "react";

enum Category {
  All = "All",
  Complete = "Complete",
  Incomplete = "Incomplete",
}

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(Category.All);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectedCategory = (category: Category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-purple-600 text-white text-sm font-medium px-4 py-3 rounded-md w-full shadow-sm hover:bg-purple-700 transition-colors"
      >
        {selectedCategory}
        <span className="ml-2 text-xs">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-purple-300 rounded-lg shadow-lg z-10 overflow-hidden">
          <div
            className="px-4 py-3 cursor-pointer text-purple-700 font-medium hover:bg-purple-50 transition-colors"
            onClick={() => handleSelectedCategory(Category.All)}
          >
            All
          </div>
          <div
            className="px-4 py-3 cursor-pointer text-purple-700 font-medium hover:bg-purple-50 transition-colors"
            onClick={() => handleSelectedCategory(Category.Complete)}
          >
            Complete
          </div>
          <div
            className="px-4 py-3 cursor-pointer text-purple-700 font-medium hover:bg-purple-50 transition-colors"
            onClick={() => handleSelectedCategory(Category.Incomplete)}
          >
            Incomplete
          </div>
        </div>
      )}
    </div>
  );
}
