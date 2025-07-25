// import Button from '@components/Button';
// import Container from '@components/Container';
import DemoTheme from '@components/context/DemoTheme';
import GenericList from '@components/Generic/GenericList';
import RandomNumber from '@components/Restriction/RandomNumber';
import MutableRef from '@components/UseRef/MutableRef';
// import Counter from '@components/UseState/Counter';
// import LoggedIn from '@components/UseState/LoggedIn';
// import User from '@components/UseState/User';
// import Heading from '@components/Heading';
// import Input from '@components/Input';
// import Oscar from '@components/Oscar';
// import Person from '@components/Person';
// import PersonList from '@components/PersonList';
// import Status from '@components/Status';
// import Greet from '@components/Greet';

function App() {
  // const persons = [
  //   { firstName: 'lakshmi', lastName: 'kanth' },
  //   { firstName: 'pari', lastName: 'kanth' },
  //   { firstName: 'chandini', lastName: 'kanth' },
  // ];

  // const ListItems = ['lakshmi', 'kanth', 'raju'];
  // const ListItems = [1, 2, 2];
  const ListItems = [
    {
      id: 1,
      fistName: 'lakshmi',
      lastName: 'kanth',
    },
    {
      id: 2,

      fistName: 'parinka',
      lastName: 'kanth',
    },
    {
      id: 3,

      fistName: 'chandini',
      lastName: 'kanth',
    },
  ];

  return (
    <>
      {/* <Greet name="lakshmi" isLoggedIn={false} messageCount={10} />
      <Person lastName="kanth" firstName="lakshmi" />
      <PersonList persons={persons} />
      <Status status={'error'} /> */}
      {/* 
      <Heading>
        <h1>h1 -Hello</h1>
        <h2>h2 -lakshmi</h2>
        <h3>h3 -lakshmi</h3>
        <h4>h4 -lakshmi</h4>
        <h5>h5 -lakshmi</h5>
        <h6>h6 -lakshmi</h6>
      </Heading> */}

      {/* <Oscar>
        <Heading>Hello </Heading>
      </Oscar> */}

      {/* <Input
        handleChange={(e) => {
          console.log(e);
        }}
      /> */}

      {/* <Button
        handleClick={(e, id) => {
          console.log('button clicked', e, id);
        }}
      />

      <Container styles={{ textDecoration: 'underline', color: 'green' }} />

      <LoggedIn /> */}

      {/* <User />
      <Counter /> */}

      {/* <DemoTheme /> */}

      {/* <MutableRef /> */}

      <GenericList items={ListItems} onClick={(item) => console.log(item)} />

      <RandomNumber value={10} isNegative />
    </>
  );
}

export default App;
