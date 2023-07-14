import React, { useState } from "react";

const ObjectStateComponent = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    email: "",
  });

  const handleChange = (event) => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={person.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={person.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Email: {person.email}</p>
    </div>
  );
};

export default ObjectStateComponent;
