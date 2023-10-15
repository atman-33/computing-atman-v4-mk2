'use client';

import Header from './_components/header';
import Main from './_components/main';
import { ThemeProvider } from './_context/theme-context';

const Page = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
      <div className="mt-8">
        <h4>Note</h4>
        <li>If use horizontal RadioGroup, please use `grid-flow-col`</li>
        <li>The better way is that summarize Context Provider and useContext.</li>
      </div>
    </>
  );
};

export default Page;
