import './App.css';
import UseContext from './component/UseChildContext';
import UseEffect from './component/UseEffect';
import UseParentContext from './component/UseParentContext';
import PreviousState from './component/UseRef';
import InputFocus from './component/UseRef';
import UseReducer from './component/useReducer';
// import UseRef from './component/UseRef';

function App() {
  return (
    <div className="App">
      {/* <UseRef /> */}
      {/* <InputFocus/> */}
      {/* <PreviousState /> */}

      {/* <UseReducer /> */}
      {/* <UseContext  /> */}
      {/* <UseParentContext /> */}
      <UseEffect />
    </div>
  );
}

export default App;
