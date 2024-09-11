<script setup>
import AppTopbar from './AppTopbar.vue';


</script>

<template>
  <div class="w-full">
    <AppTopbar class="z-4" />
    <div class="relative flex flex-row">
      <div class="w-full z-2">
        <router-view  />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>