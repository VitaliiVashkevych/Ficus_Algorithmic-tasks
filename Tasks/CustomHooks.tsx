// TASK 1
import { useState, useEffect } from "react";
function useLocalStorage() {
  const currentTheme = localStorage.getItem("theme");
  const changeTheme = currentTheme === "light" ? "dark" : "light";
  const [theme, setTheme] = useState(currentTheme);

  function handleChange() {
    setTheme(changeTheme);
    localStorage.setItem("theme", changeTheme);
  }

  const props = {
    theme,
    handleChange,
  };

  return props;
}
const { theme, handleChange } = useLocalStorage();
console.log(theme, handleChange);

// TASK 2
function useWindowSize() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
const { width, height } = useWindowSize();
console.log(width, height);

// TASK 3
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch data, try another source");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);
  return { data, isLoading, error };
}
console.log(useFetch("https://mate.academy/students-api/goods"));
