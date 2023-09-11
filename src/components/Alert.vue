<template>
  <div v-if="flag">Hiiiiiiiii</div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["user"],
  setup(props, context) {
    console.log("context", context);
    //context.emit("clickName", { name: "Jenny" });

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

