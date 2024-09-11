<script setup>
import { ref, computed } from 'vue';
import { sessionStore } from '../stores/sessionStore';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const session = sessionStore();
const router = useRouter();

const opIdioms = ref();

const toggleIdiom = (event) => {
  opIdioms.value.toggle(event)
}

const items = computed(() => [
    { label: t('home'), to: "/home", class: getClass("/home") },
    { label: t('settings'), to: "/settings", class: getClass("/settings") }
]);

const getClass = (r) => {
  if(r!=router.currentRoute.value.path) {
    return "no-underline"
  }
  return ""
}

</script>

<template>
  <div class="w-full bg-white shadow-2 p-3 flex flex-row justify-content-between align-items-center">
    <div class="flex flex-row align-items-center justify-content-center gap-3">
      <RouterLink v-for="item in items" :to="item.to" :class="item.class" class="text-900">{{ item.label }}</RouterLink>
      <!-- <p class="m-0 cursor-pointer" :class="getClass('/home')">{{ t('home') }}</p>
      <p class="m-0 cursor-pointer" :class="getClass('/settings')">{{ t('settings') }}</p> -->
    </div>

    <div class="">
      <span class="font-bold text-3xl text-800">{{ t(session.getTitle()) }}</span>
    </div>

    <div class="flex flex-row justify-content-center align-items-center gap-3">
      <i class="pi pi-globe text-xl md:text-2xl cursor-pointer hover:text-700" @click="toggleIdiom">
        <OverlayPanel ref="opIdioms">
        <div class="flex flex-column mx-2 gap-2">
          <div class="flex flex-row align-items-center gap-2 cursor-pointer hover:text-700" @click="session.changeIdiom('ca')">
            <img src="/img/idioms/cat.png" alt="Catalan idiom" width="20px" />
            <p class="text-lg m-0">{{ t('catalan') }}</p>
          </div>
          <div class="flex flex-row align-items-center gap-2 cursor-pointer hover:text-700" @click="session.changeIdiom('en')">
            <img src="/img/idioms/en.png" alt="Catalan idiom" width="20px" />
            <p class="text-lg m-0">{{ t('english') }}</p>
          </div>
          <div class="flex flex-row align-items-center gap-2 cursor-pointer hover:text-700" @click="session.changeIdiom('es')">
            <img src="/img/idioms/es.png" alt="Catalan idiom" width="20px" />
            <p class="text-lg m-0">{{ t('spanish') }}</p>
          </div>
        </div>
      </OverlayPanel>
      </i>
    </div>
  </div>
</template>