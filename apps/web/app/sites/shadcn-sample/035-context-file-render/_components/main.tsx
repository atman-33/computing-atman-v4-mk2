import { useTheme } from '../_context/theme-context';

const Main = () => {
  const theme = useTheme();

  console.log('main');
  return (
    <div className={`bg-${theme}-500 mt-8 p-4`}>
      <h1 className="p-4">Change Theme</h1>
    </div>
  );
};

export default Main;
