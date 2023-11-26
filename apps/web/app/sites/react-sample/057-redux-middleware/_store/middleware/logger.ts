/* eslint-disable @typescript-eslint/no-explicit-any */
const logger = (store: any) => {
  return (next: any) => {
    return (action: any) => {
      console.log('Before dispatch', action, store.getState());
      next(action);
      console.log('After dispatch', action, store.getState());
    };
  };
};

export default logger;
