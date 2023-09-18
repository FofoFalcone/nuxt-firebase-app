<template>
  <div v-if="pending" class="w-full p-4">
    Loading ...
  </div>
  <div v-else class="w-full p-4">
		<h2>Agent {{ data.firstName }} {{ data.lastName }}</h2>
		<pre>{{ data }}</pre>
	</div>
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })
  import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
  const agentSlug = useRoute().params.agent;

  // Server Side
  const { data, pending } = useFetch(`/api/agents/${agentSlug}`);

  // Client Side
  onMounted(async() => {
      const firestore = useNuxtApp().$firestore;
      const docRef = doc(firestore, `agents`, `${agentSlug}`);
      onSnapshot(docRef, (snap) => {
          data.value = snap.data();
      });
  });
</script>
