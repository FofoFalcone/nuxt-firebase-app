<template>
  <div class="w-full p-4">
    <form class="flex flex-col gap-y-1" @submit.prevent="handleRegistration()">
      <input type="email" name="user-mail" id="user-mail" autocomplete v-model="credentials.email">
      <input type="password" name="user-password" id="user-password" autocomplete v-model="credentials.password">
      <button type="submit" class="btn-primary">Registrati</button>
    </form>
  </div>
</template>

<script setup>
  const credentials = reactive({
    email: "",
    password: ""
  })
  const handleRegistration = async() => {
    await registerUser(credentials.email, credentials.password)
  }
</script>
