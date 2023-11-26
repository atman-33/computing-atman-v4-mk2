const Page = () => {
  const dynamicImport = async () => {
    const m = await import('./add');
    console.log(m);
  };

  dynamicImport();
  // console.log('add: ', add(1, 2));

  return <div>Dynamic Import</div>;
};

export default Page;
