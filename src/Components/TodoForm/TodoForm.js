export function TodoForm() {
  return (
    //? form needs an ending tag and the children are the inputs/buttons/etc */
    <form className="todo-form">
      <input type="text" placeholder="Enter Task" className="todo-input" />
      <button type="submit" className="todo-submit">
        Add Task
      </button>
    </form>
  );
}
