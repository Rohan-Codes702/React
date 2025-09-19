import React, { useContext } from 'react';
import { MyContext } from '../App';  

const ChildA = () => {
  const username = useContext(MyContext);

  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  );
};

export default ChildA;
