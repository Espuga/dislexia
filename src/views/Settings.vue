<script setup>
import { ref, onMounted } from 'vue'
import { sessionStore } from '@/stores/sessionStore';
import { useI18n } from 'vue-i18n';
import { useToast } from 'primevue/usetoast';

const session = sessionStore();
const { t } = useI18n();
const toast = useToast();

const text = ref("");

onMounted(() => {
  text.value = session.getText()
})

const save = () => {
  session.setText(text.value)
  toast.add({ severity: 'success', summary: t('saved'), detail: '', life: 3000 })
  console.log(session.getText())
}

</script>

<template>
  <div class="m-2">
    <div class="m-4 bg-bluegray-50 border-1 border-200 shadow-2 p-3 border-round-2xl flex flex-column justify-content-center align-items-center gap-2">
      <Textarea v-model="text" rows="7" autoResize  class="w-full" />
      <Button :label="t('save')" @click="save" class="w-5rem border-round-2xl p-2 bg-blue-200 text-blue-500" />
    </div>
  </div>
  <Toast />
</template>