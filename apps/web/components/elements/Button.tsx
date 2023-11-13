'use client';

import { Button as ShadcnButton } from '@libs/web/ui-shadcn';

interface IProps {
  label: string;
  onClick: () => void;
  flat?: boolean;
}

export const Button = (props: IProps) => {
  const { label, onClick, flat = false } = props;

  return (
    <ShadcnButton
      onClick={() => onClick()}
      className={
        (flat
          ? 'border-transparent hover:border-transparent '
          : 'border-black hover:border-gray-600 ') +
        'okkino-text-hover border pb-3 pl-9 pr-9 pt-3  text-sm uppercase'
      }
    >
      {label}
    </ShadcnButton>
  );
};
