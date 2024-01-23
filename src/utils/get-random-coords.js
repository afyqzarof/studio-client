const getRandomNum = () => {
  return Math.floor(Math.random() * 700);
};

const getRandomCoords = () => {
  return {
    x: getRandomNum(),
    y: getRandomNum(),
  };
};

export default getRandomCoords;
