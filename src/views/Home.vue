<script setup>
import { sessionStore } from '@/stores/sessionStore';
import { onMounted, ref } from 'vue';

const session = sessionStore();
const interval = ref()
const text = ref(session.getText())
const value = ref({ name: 'Option1', value: 'option1' });
const options = ref([
  { name: 'Option1', value: 'option1' },
  { name: 'Option2', value: 'option2' },
  { name: 'Option3', value: 'option3' },
]);

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
  let splittetText = session.getText().split(" ")
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
})

</script>

<template>
  <div class="m-2">
    <div class="w-full flex justify-content-center align-items-center mt-4">
      <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom" 
        class="" >
        <template #option="slotProps">
          <p class="m-0 text-xs">{{ slotProps.option.name }}</p>
        </template>
      </SelectButton>
    </div>
    <div class="m-4 bg-bluegray-50 border-1 border-200 shadow-2 p-3 border-round-2xl flex flex-column justify-content-center align-items-center gap-2">
      <!-- {{ session.getText() }} -->
      <div v-if="value.value == 'option1'">{{ text }}</div>
      <div v-if="value.value == 'option2'">
        <div class="text-container">
          <div class="text-xl">{{ session.getText() }}</div>
          <div class="text-xl overlay-text">{{ session.getText() }}</div>
        </div>
      </div>
      <div v-if="value.value == 'option3'">
        <div class="text-container">
          <div class="text-xl">{{ session.getText() }}</div>
          <div class="text-xl overlay-text2">{{ session.getText() }}</div>
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