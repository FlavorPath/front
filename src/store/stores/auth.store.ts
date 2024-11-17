import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthPersistedState {
  isLoggedIn: boolean;
  accessToken: string;
}

interface AuthState extends AuthPersistedState {
  setAccessToken: (token: string) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()(
  persist(
    set => ({
      isLoggedIn: false,
      accessToken: '',
      setAccessToken: (token: string) => set({ accessToken: token, isLoggedIn: !!token }),
      logout: () =>
        set({
          accessToken: '',
          isLoggedIn: false,
        }),
    }),
    {
      name: 'auth-storage',
      partialize: state => ({
        isLoggedIn: state.isLoggedIn,
        accessToken: state.accessToken,
      }),
    }
  )
);

export default useAuth;
