import { useState } from "react";
import Header from "../components/header/Header";
import TodoList from "../components/items/TodoList";
import AddItemForm from "../components/items/AddItemForm";
import TodoButton from "../components/buttons/TodoButton";
import TodoProvider from "../contexts/TodoItemContext";

function Layout() {
  const [showDialog, setShowDialog] = useState(false);

  // function handleAddItem(title: string) {
  //   dispatch({ type: TodoItemsActionKind.ADD_TODO_ITEM, payload: { title } });
  // }

  // function handleToggleItem(
  //   id: number,
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) {
  //   dispatch({
  //     type: TodoItemsActionKind.TOGGLE_TODO_ITEM,
  //     payload: { id, completed: event.target.checked },
  //   });
  // }

  // function handleDeleteItem(id: number) {
  //   dispatch({ type: TodoItemsActionKind.DELETE_TODO_ITEM, payload: { id } });
  // }

  // function handleUpdateItem(id: number, title: string) {
  //   dispatch({
  //     type: TodoItemsActionKind.UPDATE_TODO_ITEM,
  //     payload: { id, title },
  //   });
  // }

  function handleSetDialog() {
    setShowDialog(!showDialog);
  }

  return (
    <TodoProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <TodoList />
        <TodoButton onSetFormState={handleSetDialog} />
        {showDialog && <AddItemForm onSetFormState={handleSetDialog} />}
      </div>
    </TodoProvider>
  );
}

export default Layout;
