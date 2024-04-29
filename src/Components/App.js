//? need to wrap import in curly braces because it is a named export
import { TodoWrapper } from "./TodoWrapper/TodoWrapper";

export function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}
