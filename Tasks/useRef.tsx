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


// TASK 2

// Create a child component with a method that logs a message to the console. Use forwardRef to allow a parent component to access this method using a ref.
//   Accessing Child Component Methods

const Child = React.forwardRef((props: any, ref: any) => {
  console.log("I am the child");
  return <div ref={ref}>Child component</div>;
})

function App2() {
  return (
    <>
      <Child />
    </>
  );
}

// TASK 3
// TASK 3
// Controlling Animations with Refs
// Create a component with an animated box (e.g., using CSS transitions). Use the useRef hook to control the start and stop of the animation based on user actions.

function App3() {
  const animationRef = useRef(null);
  const startAnimation = () => {
    if (animationRef.current) {
      (animationRef.current as HTMLElement).className += " animate";
    }
  };
  const stopAnimation = () => {
    if (animationRef.current) {
      (animationRef.current as HTMLElement).className = "animation";
    }
  };

  const pauseAnimation = () => {
    if (animationRef.current) { 
      (animationRef.current as HTMLElement).style.animationPlayState = "paused";
    }
  };
  const resumeAnimation = () => {
    if (animationRef.current) {
      (animationRef.current as HTMLElement).style.animationPlayState = "running";
    }
  }
  return (
    <div className="App">
      <div id="animation" className="animation" ref={animationRef}></div>
      <button onClick={startAnimation}>Start</button>
      <button onClick={stopAnimation}>Stop</button>
      <button onClick={pauseAnimation}>Pause</button>
      <button onClick={resumeAnimation}>Resume</button>
    </div>
  );
}