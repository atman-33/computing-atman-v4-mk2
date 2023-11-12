'use client';

import { RecoilRoot } from 'recoil';
import InputForm from './InputForm';
import List from './List';

const Todo = () => {
  return (
    <RecoilRoot>
      <List />
      <InputForm />
    </RecoilRoot>
  );
};

export default Todo;
