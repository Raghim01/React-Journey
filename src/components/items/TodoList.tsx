import { useTodos } from "../../hooks/useToDo";
import TodoItem from "./TodoItem";

// type TodoListProps = {
//   state: TodoItemState[];
//   onToggleItem: (
//     id: number,
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => void;
//   onDeleteItem: (id: number) => void;
//   onUpdateItem: (id: number, title: string) => void;
// };

function TodoList() {
  const { state } = useTodos();

  return (
    <div className="w-full max-w-4xl mx-auto px-12 flex flex-col">
      {state.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodoList;
