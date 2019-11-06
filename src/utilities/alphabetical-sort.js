const alphabeticalSort = (data, accessor) => {
  return data.sort((x, y) => {
    const xValue = accessor(x);
    const yValue = accessor(y);

    if (xValue < yValue) {
      return -1;
    }

    if (xValue > yValue) {
      return 1;
    }

    return 0;
  });
};

export default alphabeticalSort;
