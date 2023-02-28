import DisplayTodos from './components/DisplayTodos';
import  Todos  from './components/Todos';
import { GlobalStyle } from './styledComponent/AllStyleComponent';

function App() {
  return (
   <>
   <GlobalStyle/>
  <Todos/>
  <DisplayTodos/>
     </>
  );
}

export default App;
