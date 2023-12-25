'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@libs/web/ui-shadcn';
import { cn } from '@libs/web/ui-shadcn/lib/utils';

export type ComboboxItem = {
  value: string;
  label: string;
};

type Props = {
  items: ComboboxItem[];
  selectedItem?: ComboboxItem;
  setSelectedItem: (item: ComboboxItem) => void;
};

export function Combobox(props: Props) {
  const { items, selectedItem, setSelectedItem } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedItem
            ? items.find((item) => item.value === selectedItem.value)?.label
            : 'Select items...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setSelectedItem({
                    value: currentValue,
                    label: items.find((item) => item.value === currentValue)?.label || ''
                  });
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selectedItem?.value === item.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
