import { Label, RadioGroup, RadioGroupItem } from '@libs/web/ui-shadcn';
import { useTheme } from '../_context/theme-context';

const Header = () => {
  const [theme, setTheme] = useTheme();

  const THEMES = ['white', 'gray', 'red'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeTheme = (e: any) => {
    if (e.target.value === theme || e.target.value === undefined) return;
    setTheme(e.target.value);
    console.log(e.target.value);
  };

  return (
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
  );
};

export default Header;
