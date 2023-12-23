import { useRecoilState } from 'recoil';
import { editingLinkState } from '../stores/editingLinkState';

export const useEditingLink = () => {
  const [editingLink, setEditingLink] = useRecoilState(editingLinkState);

  return {
    editingLink,
    setEditingLink
  };
};
