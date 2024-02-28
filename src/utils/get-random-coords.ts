type Coordinate = {
  x: number;
  y: number;
};
const getRandomNum = () => {
  return Math.floor(Math.random() * 700);
};

const getRandomCoords = (): Coordinate => {
  return {
    x: getRandomNum(),
    y: getRandomNum(),
  };
};

export default getRandomCoords;
