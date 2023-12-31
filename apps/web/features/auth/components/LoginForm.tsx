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
import { NEXT_PUBLIC_IS_DEV } from '@/config/index';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import authApi from '../api/auth-api';
import { useIsAuthenticated } from '../hooks/useIsAuthenticated';
import { useRedirectPath } from '../hooks/useRedirectPath';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

const LoginForm = () => {
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { redirectPath } = useRedirectPath();
  const { setIsAuthenticated } = useIsAuthenticated();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: NEXT_PUBLIC_IS_DEV === '1' ? 'test-user1@gmail.com' : '',
      password: NEXT_PUBLIC_IS_DEV === '1' ? 'test1234' : ''
    }
  });

  const login = async () => {
    const response: any = await authApi.login(form.getValues('email'), form.getValues('password'));
    // console.log(response);
    if (response.error) {
      setError(response.message);
    } else {
      setIsAuthenticated(true);
      setError('');
      // console.log('redirectPath:', redirectPath);
      if (redirectPath) {
        router.push(redirectPath);
      } else {
        router.push('/');
      }
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(login)} className="space-y-8">
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
            <Button type="submit">Login</Button>
          </div>
        </form>
      </Form>
      <p className="mt-4 text-lg font-bold text-red-500">{error}</p>
    </div>
  );
};

export default LoginForm;
