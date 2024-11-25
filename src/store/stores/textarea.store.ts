import { create } from 'zustand';

interface TextareaState {
  content: string;
  setContent: (value: string) => void;
  isFocused: boolean;
  setIsFocused: (value: boolean) => void;
}

const useTextareaStore = create<TextareaState>(set => ({
  content: '',
  setContent: value => set({ content: value }),
  isFocused: false,
  setIsFocused: value => set({ isFocused: value }),
}));

export default useTextareaStore;
