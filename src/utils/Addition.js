

export const DoAddition = (num1, num2) => {
  return num1 + num2;
};

export const generateNumbers = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  return {
    num1: num1,
    num2: num2,
    operation: '+',
    solution: solution
  };
};

