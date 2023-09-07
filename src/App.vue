<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">Click me</button>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    let num = ref(0);

    function increment() {
      num.value++;
    }

    const user = reactive({
      name: "Jenny",
      age: 31,
    });

    setTimeout(() => {
      user.name = "Leo";
    }, 3000);

    return {
      num,
      increment,
      ...toRefs(user),
    };
  },
};
</script>
