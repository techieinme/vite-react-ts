import type { personProps } from './Person.types';

const Person = ({ firstName, lastName }: personProps) => {
  return (
    <h1>
      firstName: {firstName}
      lastName:{lastName}
    </h1>
  );
};

export default Person;
