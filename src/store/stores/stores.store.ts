import { create } from 'zustand';

export interface Store {
	storeName: string;
	storeAddress: string;
}

interface StoreState {
  stores: Store[];
  setStores: (value: Store[]) => void;
  noResultText: string;
  setNoResultText: (value: string) => void;
}

const useStoreState = create<StoreState>(set => ({
  stores: [],
  setStores: value => set({ stores: value }),
  noResultText: '',
  setNoResultText: value => set({ noResultText: value }),
}));

export default useStoreState;
