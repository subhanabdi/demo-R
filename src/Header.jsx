import React, { useContext, useState } from "react";

export default function Header(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDafault();
    props.getData(name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
