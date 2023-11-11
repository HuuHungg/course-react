import { useSelector } from "../core/hook";
const TodoList = () => {
  const { todo2 } = useSelector();
  console.log(todo2);
  return (
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
  );
};

export default TodoList;
