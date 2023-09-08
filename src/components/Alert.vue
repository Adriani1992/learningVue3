<template>
  <div v-if="!flag">Hiiiiiiiii</div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["user"],
  setup(props) {
    const flag = computed(() => {
      return props.user.name === "Leo";
    });

    console.log("props", props);

    return {
      flag,
    };
  },
};
</script>

