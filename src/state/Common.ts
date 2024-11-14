export const createSelectors = <T extends Record<string, any>>(
  state: T,
): ISelectors<T> => {
  return Object.keys(state).reduce(
    (selectors, key) => ({
      ...selectors,
      [key]: (state1: T) => state1[key],
    }),
    {} as ISelectors<T>,
  );
};