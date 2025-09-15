import { useContext } from 'react';
import { MyContext } from '../App';

function Child() {
  const { theme, changeTheme } = useContext(MyContext);

  return (
    <button onClick={changeTheme}>
      Switch to {theme === "dark" ? "light" : "dark"} mode
    </button>
  );
}

export default Child;
