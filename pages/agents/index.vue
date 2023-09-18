<template>
  <div v-if="pending" class="w-full p-4">
    Loading ...
  </div>
  <div v-else class="w-full p-4">
    <h2>Agents</h2>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })
  import { collection, onSnapshot, getDoc, updateDoc } from "firebase/firestore";

    // Server Side
  const { data, pending } = await useFetch(`/api/agents`);

  // Client Side
  onMounted(async() => {
    const firestore = useNuxtApp().$firestore;
    const collectionRef = collection(firestore, 'agents');
    onSnapshot(collectionRef, (snapshot) => {
        const dataList = snapshot.docs.map(doc => doc.data());
        data.value = dataList;
    });
  });
</script>