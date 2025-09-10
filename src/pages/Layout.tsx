import { useState } from "react";
import Header from "../components/header/Header";
import TodoList from "../components/items/TodoList";
import AddItemForm from "../components/items/AddItemForm";
import TodoButton from "../components/buttons/TodoButton";
import TodoProvider from "../contexts/TodoItemContext";

function Layout() {
  const [showDialog, setShowDialog] = useState(false);

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
