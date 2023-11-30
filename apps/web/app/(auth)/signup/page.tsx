/* eslint-disable @nx/enforce-module-boundaries */
import Link from '@/components/elements/Link';
import SignUpForm from '@/features/auth/components/SignUpForm';

const Page = () => {
  return (
    <div className="mt-8 grid grid-cols-1 grid-rows-2 justify-center">
      <div className="col-span-1 flex justify-center">
        <SignUpForm />
      </div>
      <div className="mt-4 flex flex-wrap gap-4 md:justify-center">
        <p>{`Already have an account?`}</p>
        <Link href="/login" className="text-primary-500 font-extrabold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Page;
