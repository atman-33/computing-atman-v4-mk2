import { useRecoilState } from 'recoil';
import { editLinkShowState } from '../stores/editLinkShowState';

export const useEditLinkShow = () => {
  const [editLinkShow, setEditLinkShow] = useRecoilState(editLinkShowState);

  return {
    editLinkShow,
    setEditLinkShow
  };
};
