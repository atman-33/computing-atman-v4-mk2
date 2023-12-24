'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from './Select';

export type ComboBoxItem = {
  id: string;
  value: string;
};

type Props = {
  label?: string;
  items: ComboBoxItem[];
  selectedId: string;
  setSelectedId: (id: string) => void;
  defaultPlaceholder?: string;
};

const ComboBox = (props: Props) => {
  const { label, items, selectedId: selected, setSelectedId, defaultPlaceholder } = props;

  return (
    <div className="mt-8 grid grid-cols-12">
      <div className="col-span-6">
        <Select value={selected} onValueChange={(id) => setSelectedId(id)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={defaultPlaceholder ?? 'Select an item'} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {label && <SelectLabel>{label}</SelectLabel>}
              {items.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ComboBox;
