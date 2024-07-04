import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { LoggedIn } from './components/state/LoggedIn';
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
      <PersonList names={nameList} />
      {/* <Status status='loading' /> */}
      {/* <Status status='success' /> */}
      {/* <Status status='error' /> */}
      <Heading>Headingのテキスト</Heading>
      <Oscar>
        <Heading>Oscarの子</Heading>
      </Oscar>
      <Greet name='zoro' isLoggedIn={true} />
      <Button handleClick={(event, id) => {
        console.log('button click!', event, id);
      }} />
      <Input value='' handleChange={(event) => console.log(event.nativeEvent)} />
      <Container styles={{ border: '1px solid black', padding: '1rem', fontSize: '2rem' }} />
      <LoggedIn />
    </div>
  );
}

export default App;
