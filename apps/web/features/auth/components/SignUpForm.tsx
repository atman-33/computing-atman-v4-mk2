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
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import userApi from '../api/user-api';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

const SignUpForm = () => {
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const signUp = async () => {
    const response: any = await userApi.createUser({
      email: form.getValues('email'),
      password: form.getValues('password')
    });

    // console.log(response);
    if (response.error) {
      setError(response.error);
    } else {
      setError('');

      // redirect to login page
      router.push('/login');
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(signUp)} className="w-full space-y-8 md:w-1/2">
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
      <p className="mt-4 text-lg font-bold text-red-500">{error}</p>
    </>
  );
};

export default SignUpForm;
