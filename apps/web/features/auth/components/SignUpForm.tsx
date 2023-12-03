'use client';

import { Button } from '@/components/elements/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/elements/Form';
import { Input } from '@/components/elements/Input';
import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserDocument } from '@libs/web/data-access-graphql';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

const SignUpForm = () => {
  // const [error, setError] = useState<string>('');
  const [createUser, { loading, error }] = useMutation(CreateUserDocument);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const signUp = async () => {
    try {
      await createUser({
        variables: {
          createUserData: {
            email: form.getValues('email'),
            password: form.getValues('password')
          }
        }
      });

      // redirect to login page
      router.push('/login');
    } catch (error) {
      console.log(error);
    }

    // const response: any = await userApi.createUser({
    //   email: form.getValues('email'),
    //   password: form.getValues('password')
    // });

    // // console.log(response);
    // if (response.error) {
    //   setError(response.error);
    // } else {
    //   setError('');

    //   // redirect to login page
    //   router.push('/login');
    // }
  };

  return (
    <div className="w-full md:w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(signUp)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </Form>
      <p className="mt-4 text-lg font-bold text-red-500">{error?.message}</p>
    </div>
  );
};

export default SignUpForm;
