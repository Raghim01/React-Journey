export enum TodoItemsActionKind {
  ADD_TODO_ITEM = "ADD_TODO_ITEM",
  TOGGLE_TODO_ITEM = "TOGGLE_TODO_ITEM",
  DELETE_TODO_ITEM = "DELETE_TODO_ITEM",
  UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM",
}

type TodoItemsAction =
  | {
      type: TodoItemsActionKind.ADD_TODO_ITEM;
      payload: { title: string };
    }
  | {
      type: TodoItemsActionKind.TOGGLE_TODO_ITEM;
      payload: { id: number; completed: boolean };
    }
  | {
      type: TodoItemsActionKind.UPDATE_TODO_ITEM;
      payload: { id: number; title: string };
    }
  | {
      type: TodoItemsActionKind.DELETE_TODO_ITEM;
      payload: { id: number };
    };

export interface TodoItemState {
  id: number;
  title: string;
  completed: boolean;
}

export function todoItemsReducer(
  state: TodoItemState[],
  action: TodoItemsAction
) {
  const { type, payload } = action;

  switch (type) {
    case TodoItemsActionKind.ADD_TODO_ITEM:
      return [
        ...state,
        {
          id: Date.now(),
          title: payload.title,
          completed: false,
        },
      ];
    case TodoItemsActionKind.TOGGLE_TODO_ITEM:
      return state.map((item) =>
        item.id === payload.id
          ? { ...item, completed: payload.completed }
          : item
      );
    case TodoItemsActionKind.UPDATE_TODO_ITEM:
      return state.map((item) =>
        item.id === payload.id ? { ...item, title: payload.title } : item
      );
    case TodoItemsActionKind.DELETE_TODO_ITEM:
      return state.filter((item) => item.id !== payload.id);

    default:
      return state;
  }
}
