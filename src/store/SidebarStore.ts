import { create } from 'zustand';

type sidebarState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useSidebarStore = create<sidebarState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export { useSidebarStore };
