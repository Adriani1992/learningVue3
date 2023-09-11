<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click me</button>
    <p>{{ name }}</p>
    <input type="text" v-model="phrase" />
    <p>{{ reversePhrase }}</p>
    <p>{{ pharseNum }}</p>
  </div>
  <Alert :user="user" />

  <button type="button" ref="btn">Button</button>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import Alert from "@/components/Alert.vue";
import { useNumber } from "@/hooks/number";
import { usePharse } from "@/hooks/pharse";

const btn = ref(null);
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
  btn.value.addEventListener("click", () => {
    console.log("Button has been clicked");
  });
});

const user = reactive({
  name: "Jenny",
  age: 31,
});

setTimeout(() => {
  user.name = "Leo";
}, 3000);

const { num, increment, double } = useNumber();
const { phrase, reversePhrase, num: pharseNum } = usePharse();
//composition API 允許在composition function 這邊同名時直接在此改名

const { name } = toRefs(user);
</script>
