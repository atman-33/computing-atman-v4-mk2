import { Button } from '@/components/elements/Button';

/**
 * Referrence URL: https://tailwindflex.com/@arya/tailwind-spinner
 * @returns
 */
const Page = () => {
  return (
    <div>
      <div className="m-8">
        <Button className="animate-spin">:)</Button>
      </div>
      <div className="m-8">
        <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
      </div>
    </div>
  );
};

export default Page;
