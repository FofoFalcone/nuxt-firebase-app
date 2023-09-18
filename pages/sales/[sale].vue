<template>
  <div v-if="pending" class="w-full p-4">
    Loading ...
  </div>
  <div v-else class="w-full p-4">
		<h2>Sale</h2>
		<pre>{{ data }}</pre>
	</div>
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })
  import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
  const saleSlug = useRoute().params.sale;

  // Server Side
  const { data, pending } = useFetch(`/api/sales/${saleSlug}`);

  // Client Side
  onMounted(async() => {
      const firestore = useNuxtApp().$firestore;
      const docRef = doc(firestore, `sales`, `${saleSlug}`);
      onSnapshot(docRef, (snap) => {
          data.value = snap.data();
      });
  });
</script>
