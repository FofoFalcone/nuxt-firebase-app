<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <BaseModal v-if="useModalStore().show" ></BaseModal>
</template>

<style lang="scss">
html, :root {
  font-family: 'Quicksand', sans-serif;
}

#__nuxt {
  min-height: 100vh !important;
}
</style>