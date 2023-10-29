'use client';

import Footer from './_components/Footer';
import Header from './_components/Header';
import Main from './_components/Main';
import { ThemeProvider } from './_context/ThemeContext';

const Page = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
      <div className="mt-8">
        <h4>Note</h4>
        <li>
          When using Context, if rendering becomes heavy, it is advisable to use createContext and
          separate the values and logic.
        </li>
        <li>On the other hand, when using Redux, there is no need to use Context.</li>
      </div>
    </>
  );
};

export default Page;
