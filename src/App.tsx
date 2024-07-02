import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: 'tanaka',
    last: 'tarou',
  }

  return (
    <div className='App'>
      <Greet name='nasio' age={30} isLoggedIn={true} />
      <Greet name='nasio2' age={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
