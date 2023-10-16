import { Label, RadioGroup, RadioGroupItem } from '@libs/web/ui-shadcn';
import { useTheme, useUpdateTheme } from '../_context/theme-context';

const Header = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  const THEMES = ['yellow', 'gray', 'red'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeTheme = (e: any) => {
    if (e.target.value === theme || e.target.value === undefined) return;
    setTheme(e.target.value);
    console.log(e.target.value);
  };

  console.log('header');
  return (
    <>
      {/* display: 'none' div is hidden because it's dummy to load style */}
      <div style={{ display: 'none' }}>
        <div className=" bg-yellow-500 "></div>
        <div className=" bg-gray-500 "></div>
        <div className=" bg-red-500"></div>
      </div>
      <div className={`bg-${theme}-500 mt-8 p-4`}>
        <RadioGroup
          defaultValue={theme}
          className="my-2 grid-flow-col"
          onClick={(e) => changeTheme(e)}
        >
          {THEMES.map((item, index) => (
            <div key={item} className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={index as unknown as string} />
              <Label htmlFor={index as unknown as string}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export default Header;
