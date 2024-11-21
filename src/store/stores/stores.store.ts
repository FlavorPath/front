import { Store } from '@/mocks/mock-data/stores.mock';
import { create } from 'zustand';

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
