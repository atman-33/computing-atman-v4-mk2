import { useUpdateTheme } from '../_context/theme-context';

const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setTheme = useUpdateTheme();

  console.log('footer');
  return (
    <div>
      <h1 className="p-4">Footer</h1>
    </div>
  );
};

export default Footer;
