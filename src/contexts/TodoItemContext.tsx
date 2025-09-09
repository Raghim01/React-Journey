import { createContext, useMemo, useReducer, useState } from "react";
import {
  TodoItemsActionKind,
  todoItemsReducer,
  type TodoItemState,
} from "../components/items/reducer";

type TodoContextType = {
  fullState: TodoItemState[];
  functionalState: TodoItemState[];
  actions: {
    addItem: (title: string) => void;
    updateItem: (id: number, title: string) => void;
    deleteItem: (id: number) => void;
    toggleItem: (
      id: number,
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    searchItem: (searchTerm: string) => void;
  };
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoItemsReducer, []);
  const [searchTerm, setSearchTerm] = useState("");

  let filteredItems: TodoItemState[] = [];

  if (searchTerm.length) {
    filteredItems = state.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    filteredItems = state;
  }

  const searchItem = useMemo(() => {
    let timeout: ReturnType<typeof setTimeout>;
    return (term: string) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSearchTerm(term.trim());
      }, 500);
    };
  }, []);

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
    searchItem,
  };

  return (
    <TodoContext.Provider
      value={{ fullState: state, functionalState: filteredItems, actions }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
