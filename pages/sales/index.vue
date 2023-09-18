<template>
  <div v-if="pending" class="w-full p-4">Loading ...</div>
  <div v-else class="w-full p-4">
    <h2>Sales</h2>
    <p>{{ data }}</p>
    <p>{{ data }}</p>
    <p>{{ data }}</p>
    <p>{{ data }}</p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })
  import { collection, onSnapshot, getDoc, updateDoc } from "firebase/firestore";

  // Server Side
  const { data, pending } = useFetch(`/api/sales`);

  // Client Side
  onMounted(async() => {
    const firestore = useNuxtApp().$firestore;
    const collectionRef = collection(firestore, 'sales');
    onSnapshot(collectionRef, (snapshot) => {
        const dataList = snapshot.docs.map(doc => doc.data());
        data.value = dataList;
    });
  });
</script>