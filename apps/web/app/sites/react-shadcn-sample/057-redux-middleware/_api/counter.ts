const asyncCount = (count = 1) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Promise<{ data: number }>((resolve: any) => {
    setTimeout(() => resolve({ data: count }), Math.random() * 1000);
  });
};

export { asyncCount };
