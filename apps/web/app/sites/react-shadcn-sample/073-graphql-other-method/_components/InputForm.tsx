'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@libs/web/ui-shadcn';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useTodos } from '../_hooks/useTodos';

const formSchema = z.object({
  content: z.string().min(1).max(50)
});

const InputForm = () => {
  const { createTodo } = useTodos();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: ''
    }
  });

  const addTodo = () => {
    const newTodo = {
      content: form.getValues('content'),
      editing: false,
      completed: false
    };

    createTodo(newTodo);
    form.setValue('content', '');
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addTodo)} className="space-y-8">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add new todo</FormLabel>
                <FormControl>
                  <Input placeholder="todo name" {...field} />
                </FormControl>
                <FormDescription>This is your new todo.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
    </>
  );
};

export default InputForm;
