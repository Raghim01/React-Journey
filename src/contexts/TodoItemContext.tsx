import { createContext, useReducer } from "react";
import {
  TodoItemsActionKind,
  todoItemsReducer,
  type TodoItemState,
} from "../components/items/reducer";

type TodoContextType = {
  state: TodoItemState[];
  actions: {
    addItem: (title: string) => void;
    updateItem: (id: number, title: string) => void;
    deleteItem: (id: number) => void;
    toggleItem: (
      id: number,
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
  };
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoItemsReducer, []);

  const actions = {
    addItem: (title: string) => {
      dispatch({ type: TodoItemsActionKind.ADD_TODO_ITEM, payload: { title } });
    },
    updateItem: (id: number, title: string) => {
      dispatch({
        type: TodoItemsActionKind.UPDATE_TODO_ITEM,
        payload: { id, title },
      });
    },
    deleteItem: (id: number) => {
      dispatch({ type: TodoItemsActionKind.DELETE_TODO_ITEM, payload: { id } });
    },
    toggleItem: (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: TodoItemsActionKind.TOGGLE_TODO_ITEM,
        payload: { id, completed: event.target.checked },
      });
    },
  };

  return (
    <TodoContext.Provider value={{ state, actions }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
