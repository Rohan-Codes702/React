import { useState, createContext } from 'react';
import Child from './components/child';

const MyContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const appStyle = {
    backgroundColor: theme === "dark" ? "#222" : "#eee",
    color: theme === "dark" ? "white" : "black",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <MyContext.Provider value={{ theme, changeTheme }}>
      <div style={appStyle}>
        <Child />
      </div>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
