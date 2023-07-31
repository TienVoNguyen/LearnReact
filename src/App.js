import { useState } from 'react'
import LearnState from "./components/learn-state/LearnState";
import TodoListState from "./components/learn-state/TodoListState";
import LearnEffect from "./components/learn-effect/LearnEffect";
import LearnLayoutEffect from "./components/learn-layout-effect/LearnLayoutEffect"
import LearnRef from "./components/learn-ref/LearnRef"
function App() {
  const [showLearnState, setShowLearnState] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const [showLearnEffect, setShowLearnEffect] = useState(false);
  const [showLearnLayoutEffect, setShowLearnLayoutEffect] = useState(false);
  const [showLearnRef, setShowLearnRef] = useState(false);

  return (
    <div className="App" style={{padding: 20}}>
      <button onClick={() => setShowLearnState(!showLearnState)}>Show Learn State</button>
      <button onClick={() => setShowTodos(!showTodos)}>Show TodoList</button>
      <button onClick={() => setShowLearnEffect(!showLearnEffect)}>Show Learn Effect</button>
      <button onClick={() => setShowLearnLayoutEffect(!showLearnLayoutEffect)}>Show Learn Layout Effect</button>
      <button onClick={() => setShowLearnRef(!showLearnRef)}>Show Learn Ref</button>
      <p>--------------------------------------------------------------------</p>
      {showLearnState && <LearnState />}
      <p>--------------------------------------------------------------------</p>
      {showTodos && <TodoListState />}
      <p>--------------------------------------------------------------------</p>
      {showLearnEffect && <LearnEffect />}
      <p>--------------------------------------------------------------------</p>
      {showLearnLayoutEffect && <LearnLayoutEffect />}
      <p>--------------------------------------------------------------------</p>
      {showLearnRef && <LearnRef />}
      <p>--------------------------------------------------------------------</p>
    </div>
  );
}

export default App;
