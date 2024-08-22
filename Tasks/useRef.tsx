// TASK 1
import { MutableRefObject, useRef } from "react";
import "./App.css";
import React from "react";

function App() {
  const ref = useRef(null) as MutableRefObject<null | HTMLElement>;

  const enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" && event.target instanceof HTMLElement) {
      let next = document.getElementById(`${+event.target.id + 1}`);
      if (event.target.id === "3") {
        next = document.getElementById(`1`);
      }

      ref.current = next;
      ref.current?.focus();
    }
  };
  return (
    <>
      <form action="" method="get">
        <input
          type="text"
          id="1"
          onKeyDown={(event) => {
            enter(event);
          }}
        />
        <input
          type="text"
          id="2"
          onKeyDown={(event) => {
            enter(event);
          }}
        />
        <input
          type="text"
          id="3"
          onKeyDown={(event) => {
            enter(event);
          }}
        />
      </form>
    </>
  );
}
export default App;
