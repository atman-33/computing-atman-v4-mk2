'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/elements/AlertDialog';
import { useState } from 'react';

type Props = {
  children?: React.ReactNode;
  title: string;
  description: string;
  clickHandler: () => void;
};

const OkCancelDialog = (props: Props) => {
  const [open, setOpen] = useState(false);

  const { title, description, children, clickHandler } = props;

  const clickOkHandler = () => {
    if (clickHandler) {
      clickHandler();
    }
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="min-w-[80px] rounded-full">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="min-w-[80px] rounded-full bg-blue-500 text-white shadow hover:bg-blue-700"
            onClick={clickOkHandler}
          >
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OkCancelDialog;
