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
import todoApi from '../api/todo';

const formSchema = z.object({
  title: z.string().min(1).max(50)
});

const InputForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ''
    }
  });

  const addTodo = () => {
    const newTodo = {
      title: form.getValues('title'),
      editing: false,
      completed: false
    };

    todoApi.createTodo(newTodo);
    form.setValue('title', '');
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addTodo)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
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
