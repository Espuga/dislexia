<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import LletresComponent from './components/LletresComponent.vue'
import AnimateOnScroll from 'primevue/animateonscroll';
import { ref, onMounted, watch, computed } from 'vue'

const value = ref({ name: 'Option1', value: 'option1' });
const options = ref([
  { name: 'Option1', value: 'option1' },
  { name: 'Option2', value: 'option2' },
  { name: 'Option3', value: 'option3' },
]);
const interval = ref()

const text = ref("França i Anglaterra accepten que Hitler es quedi amb els Sudets (pensaven que es conformaria), finalment va ocupar tot Txecoslovàquia, França i Anglaterra van dir que si coonquerir Polonia començarem una guerra.")
const original = ref(text.value)
const originalSplittet = ref(original.value.split(" ").map(word => `${word} `).join(''))


const girar = (word) => {
  let random = Math.abs(Math.ceil(Math.random() * word.length-2))
  while(random == 0){
    random = Math.abs(Math.ceil(Math.random() * word.length-2))
  }
  let resultWord = ""
  let aux = false
  for(let i = 0; i < word.length; i++) {
    if(aux) {
      resultWord += word.charAt(i)+word.charAt(i-1)
      aux = false
    }else {
      if(i != random) {
        resultWord += word.charAt(i)
      }else {
        aux = true
      }
    }
  }
  // console.log(resultWord)
  return resultWord
}

const animacio1 = () => {
  let splittetText = original.value.split(" ")
  let result = "";
  splittetText.forEach((word) => {
    if(word.length >= 4) {
      result += girar(word) + " "
    }else {
      result += word + " "
    }
  })
  text.value = result
}

const ferAnimacions = () => {
  clearInterval(interval.value)
  if(value.value.value == 'option1'){
    interval.value = setInterval(animacio1, 1000)
  }
}


onMounted(() => {
  ferAnimacions()
  console.log(originalSplittet)
})

// const words = computed(() => original.value.split(' '));



watch(() => value.value, ferAnimacions)

</script>

<template>
  <!-- <div class="w-full h-screen">
    <div class="flex justify-content-center align-items-center card m-8 p-5">
      <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom" 
      class="shadow-4">
        <template #option="slotProps">
          <p class="m-0">{{ slotProps.option.name }}</p>
        </template>
      </SelectButton>
      <div class="h-25rem flex justify-content-center align-items-center">
        <Textarea v-model="text" rows="10" cols="80" class="shadow-8 text-xl" />
      </div>
    </div>
  </div> -->
  <div class="w-full h-screen">
    <div class="h-3 card m-4 flex justify-content-center align-items-center p-2">
      <h1 class="text-6xl">Dislèxia</h1>
      <!-- <p>Hola Júlia :)</p> -->
    </div>
    <div class="flex justify-content-center align-items-center card m-2 p-4">
      <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom" 
      class="" >
        <template #option="slotProps">
          <p class="m-0 text-xs">{{ slotProps.option.name }}</p>
        </template>
      </SelectButton>
      <div v-if="value.value == 'option1'" class="h-25rem flex justify-content-center align-items-center">
        <Textarea v-model="text" rows="10" cols="30" class="shadow-8 text-xl" />
      </div>
      <!-- PROVA 1 -->
      <div v-else-if="value.value == 'option2'" class="h-25rem flex justify-content-center align-items-center">
        <div class="text-container">
          <div class="text-xl">{{ original }}</div>
          <div class="text-xl overlay-text">{{ original }}</div>
        </div>
      </div>
      <div v-else-if="value.value == 'option3'" class="h-25rem flex justify-content-center align-items-center">
        <div class="text-container">
          <div class="text-xl">{{ original }}</div>
          <div class="text-xl overlay-text2">{{ original }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>


/* PROVA 1 */
.text-container {
  position: relative;
}

.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  animation: moveText 1.5s infinite alternate;
}

@keyframes moveText {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(2px, 5px);
  }
}

.overlay-text2 {
  position: absolute;
  top: 0;
  left: 0;
  animation: moveText2 2s infinite alternate;
}

@keyframes moveText2 {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0.9);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>