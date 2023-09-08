<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click me</button>
    <p>{{ name }}</p>
    <input type="text" v-model="phrase" />
    <p>{{ reversePhrase }}</p>
  </div>
  <Alert :user="user" />
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  watchEffect,
  computed,
  onBeforeMount,
  onMounted,
} from "vue";
import Alert from "@/components/Alert.vue";
export default {
  name: "App",
  components: {
    Alert,
  },
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });

    let num = ref(0);

    function increment() {
      num.value++;
    }

    const double = computed(() => {
      return num.value * 2;
    });

    const user = reactive({
      name: "Jenny",
      age: 31,
    });

    setTimeout(() => {
      user.name = "Leo";
    }, 3000);

    const phrase = ref("");
    const reversePhrase = ref("");

    watchEffect(() => {
      reversePhrase.value = phrase.value.split("").reverse().join("");
    });

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversePhrase,
      double,
      user,
    };
  },
};
</script>
