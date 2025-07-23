import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
function App() {
  const persons = [
    { firstName: 'lakshmi', lastName: 'kanth' },
    { firstName: 'pari', lastName: 'kanth' },
    { firstName: 'chandini', lastName: 'kanth' },
  ];

  return (
    <>
      <Greet name="lakshmi" isLoggedIn={false} messageCount={10} />
      <Person lastName="kanth" firstName="lakshmi" />
      <PersonList persons={persons} />
      <Status status={'error'} />
    </>
  );
}

export default App;
