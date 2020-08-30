export const calcTime = (runtime) => {
  if (!runtime) return null;
  else if (runtime < 60) return `${runtime} min`;
  else {
    const min = runtime % 60;
    const hr = (runtime / 60).toPrecision(1);

    return `${hr} hr ${min} min`;
  }
};
