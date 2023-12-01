import persons from '../data/persons';
import Person from './Person';

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        // const { id, firstName, lastName, email, image } = person;
        return (
          // <Person
          //   key={id}
          //   firstName={firstName}
          //   lastName={lastName}
          //   email={email}
          //   image={image}
          // />
          <Person key={person.id} {...person} />
        );
      })}
    </div>
  );
}

export default Persons;
