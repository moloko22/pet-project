import React, { useState } from 'react';

import Button from '../Button/Button';

const Header = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <>
      <div>Header {count}</div>
      <Button onClick={handleClick}>Click</Button>
      <Button onClick={handleClick} isDisabled>
        Click
      </Button>
    </>
  );
};

export default Header;
