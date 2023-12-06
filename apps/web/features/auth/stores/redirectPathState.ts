import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : window.sessionStorage
});

/**
 * Redirect path after login
 */
export const redirectPathState = atom<string>({
  key: 'auth/redirectPathState',
  default: '',
  effects_UNSTABLE: [persistAtom]
});
