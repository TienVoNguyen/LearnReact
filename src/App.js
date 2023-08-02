import { useState } from 'react'
import LearnState from "./components/learn-state/LearnState";
import TodoListState from "./components/learn-state/TodoListState";
import LearnEffect from "./components/learn-effect/LearnEffect";
import LearnLayoutEffect from "./components/learn-layout-effect/LearnLayoutEffect"
import LearnRef from "./components/learn-ref/LearnRef"
import LearnCallback from "./components/learn-callback/LearnCallback";
import LearnMemo from "./components/learn-memo/LearnMemo";
import LearnReducer from "./components/learn-reducer/LearnReducer";
import {LearnContext} from "./components/learn-context/LearnContext";
import ContextAndReducer from "./components/context-reducer/ContextAndReducer";

import './App.css'

function App() {
  const [showLearnState, setShowLearnState] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const [showLearnEffect, setShowLearnEffect] = useState(false);
  const [showLearnLayoutEffect, setShowLearnLayoutEffect] = useState(false);
  const [showLearnRef, setShowLearnRef] = useState(false);
  const [showLearnCallback, setShowLearnCallback] = useState(false);
  const [showLearnMemo, setShowLearnMemo] = useState(false);
  const [showLearnReducer, setShowLearnReducer] = useState(false);
  const [showLearnContext, setShowLearnContext] = useState(false);
  const [showContextAndReducer, setShowContextAndReducer] = useState(false);

  return (
      <div className="App" style={{padding: 20}}>
        <button onClick={() => setShowLearnState(!showLearnState)}>Show Learn State</button>
        <button onClick={() => setShowTodos(!showTodos)}>Show TodoList</button>
        <button onClick={() => setShowLearnEffect(!showLearnEffect)}>Show Learn Effect</button>
        <button onClick={() => setShowLearnLayoutEffect(!showLearnLayoutEffect)}>Show Learn Layout Effect</button>
        <button onClick={() => setShowLearnRef(!showLearnRef)}>Show Learn Ref</button>
        <button onClick={() => setShowLearnCallback(!showLearnCallback)}>Show Learn Callback</button>
        <button onClick={() => setShowLearnMemo(!showLearnMemo)}>Show Learn Memo</button>
        <button onClick={() => setShowLearnReducer(!showLearnReducer)}>Show Learn Reducer</button>
        <button onClick={() => setShowLearnContext(!showLearnContext)}>Show Learn Context</button>
        <button onClick={() => setShowContextAndReducer(!showContextAndReducer)}>Show Context And Reducer</button>
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
        {showLearnCallback && <LearnCallback />}
        <p>--------------------------------------------------------------------</p>
        {showLearnMemo && <LearnMemo />}
        <p>--------------------------------------------------------------------</p>
        {showLearnReducer && <LearnReducer />}
        <p>--------------------------------------------------------------------</p>
        {showLearnContext && <LearnContext />}
        <p>--------------------------------------------------------------------</p>
        {showContextAndReducer && <ContextAndReducer />}
        <p>--------------------------------------------------------------------</p>
      </div>
  );
}

export default App;
