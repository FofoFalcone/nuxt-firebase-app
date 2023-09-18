import { defineStore } from 'pinia'

export const useModalStore = defineStore({
  id: 'modal-store',
  state: () => ({
    show: false,
    modalTitle: '',
    modalText: '',
    isPending: false,
  }),
  actions: {
    startPending() {
      this.isPending = true
    },
    stopPending() {
      this.isPending = false
    },
    showModal(title: string, text: string) {
      this.isPending = false
      this.modalTitle = title
      this.modalText = text
      this.show = true
    },
    showModalOnly() {
      this.show = true
    },
    hideModal() {
      this.show = false
    }
  }
})