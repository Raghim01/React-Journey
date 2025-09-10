import { useTodos } from "../../hooks/useToDo";
import TodoItem from "./TodoItem";

function TodoList() {
  const { functionalState } = useTodos();

  return (
    <div className="w-full max-w-4xl mx-auto px-12 flex flex-col">
      {functionalState.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodoList;
