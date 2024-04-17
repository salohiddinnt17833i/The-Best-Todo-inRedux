import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Form from '../Form';
import TodoTitle from '../TodoTitle';
import TodoItem from '../TodoItem';

export function TodoApp() {
  const todos = useSelector(state => state.todos.todos);
  const [active, setActive] = useState([]);
  const [inactive, setInactive] = useState([]);

  useEffect(() => {
    const activeTodos = todos.filter(todo => todo.status === true);
    const inactiveTodos = todos.filter(todo => todo.status === false);

    setActive(activeTodos);
    setInactive(inactiveTodos);
  }, [todos]);

  return (
    <div className='w-[432px] mx-auto mt-48'>
      <Form />
      <TodoTitle title="Tasks to do" count={active.length} />

      {active.map((todo, index) => (
        <TodoItem id={todo.id} key={index} title={todo.name} status={todo.status} />
      ))}

      {
        inactive.length > 0 && <TodoTitle title="Done" count={inactive.length} />
      }


      {inactive.map((todo, index) => (
        <TodoItem id={todo.id} key={index} title={todo.name} status={todo.status} />
      ))}

    </div>
  );
}

export default TodoApp;
