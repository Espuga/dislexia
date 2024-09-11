<script setup>
import { sessionStore } from '@/stores/sessionStore';

const session = sessionStore();

</script>

<template>
  <div class="m-2">
    {{ session.getText() }}
  </div>
</template>