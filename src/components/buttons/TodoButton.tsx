type TodoButtonProps = {
  onSetFormState: () => void;
};

function TodoButton({ onSetFormState }: TodoButtonProps) {
  return (
    <button
      onClick={onSetFormState}
      className="flex items-center justify-center text-purple-600 hover:text-purple-800 font-medium py-3 mt-4 transition-colors"
    >
      <svg
        className="w-6 h-6 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      Add
    </button>
  );
}

export default TodoButton;
