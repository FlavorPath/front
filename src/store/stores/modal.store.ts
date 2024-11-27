import { create } from 'zustand';

interface ModalButton {
	text: string;
	fn: () => void;
}

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
	closeModal: () => void;
	title: string;
	subtitle: string;
	buttons: ModalButton[]
	setTitle: (value: string) => void;
	setSubtitle: (value: string) => void;
	setButtons: (value: ModalButton[]) => void;
}

export const useModalStore = create<ModalState>(set => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  title: '모달 제목을 입력해 주세요',
  subtitle: '모달 내용을 입력해 주세요',
  buttons: [],
  setTitle: (value: string) => set({ title: value }),
	setSubtitle: (value: string) => set({ subtitle: value }),
	setButtons: (value: ModalButton[]) => set({ buttons: value})
}));
