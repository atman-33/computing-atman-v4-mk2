import { ComboboxItem } from '@/components/elements/Combobox';
import { atom } from 'recoil';

export const comboBoxSelectedBookmarkState = atom<ComboboxItem | undefined>({
  key: 'booker/comboBoxSelectedBookmarkState',
  default: undefined
});
