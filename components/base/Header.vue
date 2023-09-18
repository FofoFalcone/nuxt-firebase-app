<template>
	<div id="header" class="header sticky top-0 flex flex-side-extended h-screen" :class="isExtended ? 'flex-side-extended' : ''">
    <div class="sticky flex flex-col justify-between w-full h-full bg-dark-purple p-4">
			<div class="flex flex-col">
				<NuxtLink class="flex items-center justify-start" to="/">
					<Icon name="ic:baseline-other-houses" :color="teaGreen" />
					<span class="text-tea-green ml-2">Home</span>
				</NuxtLink>
				<NuxtLink  class="flex items-center justify-start" to="/agents">
					<Icon name="ic:baseline-support-agent" :color="teaGreen" />
					<span class="text-tea-green ml-2">Agents</span>
				</NuxtLink>
				<NuxtLink  class="flex items-center justify-start" to="/sales">
					<Icon name="ic:baseline-attach-money" :color="teaGreen" />
					<span class="text-tea-green ml-2">Sales</span>
				</NuxtLink>
			</div>
			<div class="flex flex-col">
				<p  class="text-tea-green" style="cursor: pointer" @click="logout()">Logout</p>
				<NuxtLink  class="flex items-center justify-start" to="/login">
					<Icon name="ic:baseline-log-in" :color="teaGreen" />
					<span class="text-tea-green ml-2">Login</span>
				</NuxtLink>
			</div>
    </div>
	</div>
</template>

<script setup>
// Logout
import { getAuth, signOut } from 'firebase/auth';
const logout = async () => {
  const auth = getAuth();
	console.log(auth);
  try {
    await signOut(auth);
    console.log('Utente disconnesso con successo');
  } catch (error) {
    console.error('Errore durante la disconnessione:', error);
  }
};

// Gestisci estensione dell'header
const isExtended = ref(true);
const extendHeader = () => {
  isExtended.value = !isExtended.value
}
const teaGreen = "rgba(196, 214, 176, 1)";
</script>
