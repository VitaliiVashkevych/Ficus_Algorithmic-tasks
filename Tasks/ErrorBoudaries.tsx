import React, { useState } from "react";

// TASK 1
function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ThrowCounter />
    </ErrorBoundary>
  );
}

const ThrowCounter = () => {
  const [count, setCount] = useState(5);

  const throwCounterClickHandler = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  if (count <= 0) {
    throw new Error("Counter threw an error!");
  }

  return (
    <button color="primary" onClick={(e) => throwCounterClickHandler(e)}>
      Throw Error in {count} clicks.
    </button>
  );
};
interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state: State = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// TASK 2

function App2() {
  return (
    <>
      <ErrorBoundary2 fallback={<div>Something went wrong</div>}>
        <ThrowCounter />
      </ErrorBoundary2>
      <ErrorBoundary2 fallback={<div>Something went wrong</div>}>
        <ThrowCounter />
      </ErrorBoundary2>
      <ErrorBoundary2 fallback={<div>Something went wrong</div>}>
        <ThrowCounter />
      </ErrorBoundary2>
    </>
  );
}

const ThrowCounter2 = () => {
  const [count, setCount] = useState(5);

  const throwCounterClickHandler = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  if (count <= 0) {
    throw new Error("Counter threw an error!");
  }

  return (
    <button color="primary" onClick={(e) => throwCounterClickHandler(e)}>
      Throw Error in {count} clicks.
    </button>
  );
};

class ErrorBoundary2 extends React.Component<ErrorBoundaryProps> {
  state: State = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// TASK 3