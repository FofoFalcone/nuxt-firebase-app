<template>
  <div class="w-full p-4">
    <form class="flex flex-col gap-y-1" @submit.prevent="login()">
      <input
        type="email"
        name="user-mail"
        id="user-mail"
        autocomplete
        v-model="email"
      />
      <input
        type="password"
        name="user-password"
        id="user-password"
        autocomplete
        v-model="password"
      />
      <button type="submit" class="btn-primary">Accedi</button>
    </form>
  </div>
</template>

<script setup>
import {
  signInWithEmailAndPassword,
  setPersistence,
  inMemoryPersistence,
  getIdToken,
} from "firebase/auth";

const { $auth } = useNuxtApp();
const email = ref("");
const password = ref("");

const login = () =>
  setPersistence($auth, inMemoryPersistence).then(() => {
    signInWithEmailAndPassword($auth, email.value, password.value).then(
      (user) => {
        getIdToken(user.user).then((idToken) => {
          fetch("api/login", {
            method: "POST",
            body: JSON.stringify({ idToken }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json)
            .then((data) => {
              if (data.error) {
                console.log(data.error);
                return;
              }
              console.log(data);
              useModalStore().showModal(
                "Success",
                `Accesso consentito! - ${data}`
              );
            });
        });
      }
    );
  });
</script>