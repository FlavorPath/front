import { create } from 'zustand';

interface ToggleStore {
  isOn: boolean;
  toggle: () => void;
  setDefaultValue?: (value: boolean) => void;
}

const useToggleStore = create<ToggleStore>(set => ({
  isOn: false,
	toggle: () => set(state => ({ isOn: !state.isOn })),
	setDefaultValue: (value: boolean) => set({isOn: value})
}));

export default useToggleStore;
