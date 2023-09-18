<template>
  <div class="modal">
    <div v-if="useModalStore().isPending">
      <p class="">Loading...</p>
    </div>
    <div v-else class="modal-content">
      <h3>{{ useModalStore().modalTitle }}</h3>
      <p>{{ useModalStore().modalText }}</p>
      <button class="btn-primary" @click="useModalStore().hideModal">Toggle Modal</button>
    </div>
  </div>
</template>

<script setup>
  const title = computed(() => useModalStore().title);
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
</style>