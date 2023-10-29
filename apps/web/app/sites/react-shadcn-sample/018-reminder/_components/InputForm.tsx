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

const formSchema = z.object({
  content: z.string().min(1).max(50)
});

const InputForm = ({
  createTodo
}: {
  createTodo: (todo: { id: number; content: string }) => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: ''
    }
  });

  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: form.getValues('content')
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
