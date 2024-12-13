const getRandomNumberInRange =
  (min: number) =>
  (max: number): number =>
    Math.floor(Math.random() * (max - min) + min);

const getRandomNumber = getRandomNumberInRange(0);

export const generateRandomColor = (): string =>
  `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
