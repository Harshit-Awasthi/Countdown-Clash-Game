import { useState, useRef } from "react";

export default function Player() {


  const playername= useRef();

  const [enteredPlayername, setEnteredPlayername]=useState(null);

  function handleClick(){
    setEnteredPlayername(playername.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayername ?? 'unknown entity'}</h2>
      <p>
        <input ref={playername} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
