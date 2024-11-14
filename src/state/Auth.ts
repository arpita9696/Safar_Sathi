import {create} from 'zustand';
import {createSelectors} from './Common';

interface IAuth {
  isAuthenticated: boolean;
  setAuthenticated: any;
}
const initialState: IAuth = {
  isAuthenticated: true,
  setAuthenticated: () => {
    console.log('first');
  },
};

export const useAuthState = create(set => ({
  ...initialState,
  setAuthenticated: (status: any, token: any) => {
    set({isAuthenticated: status});
  },
}));

export const appStateSelectors = createSelectors(initialState);
