import type { personProps } from './Person.types';

type personProps1 = {
  persons: personProps[];
};

const PersonList = (props: personProps1) => {
  // const {persons} = props;
  return (
    <div>
      <ul>
        {props.persons.map((person, index: number) => {
          return (
            <li key={index}>
              {person.firstName}- {person.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonList;
