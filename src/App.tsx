import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'tanaka',
    last: 'tarou',
  }
  const nameList = [
    {
      first: 'jon',
      last: 'tom',
    },
    {
      first: 'amy',
      last: 'smith',
    },
    {
      first: 'bob',
      last: 'johnson',
    },
  ]
  return (
    <div className='App'>
      {/* <Greet name='nasio' age={30} isLoggedIn={true} /> */}
      {/* <Greet name='nasio2' age={20} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      <Status status='loading' />
      <Status status='success' />
      <Status status='error' />
    </div>
  );
}

export default App;
