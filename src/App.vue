<script setup>
import { sessionStore } from "@/stores/sessionStore"
import { onMounted } from "vue";

const session = sessionStore();

onMounted(() => {
  session.setTitle("dislexia")
})

</script>

<template>
  <div>
    <router-view/>
  </div>
</template>

<style scoped>

</style>
