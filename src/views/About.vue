<template>
  <div>
    <BackButton @click="$router.replace('/')" />
    <h1>About</h1>
    <p>This is the about page.</p>
  </div>
</template>

<script>
import { BackButton } from "vue-tg";
export default {
  components: {
    BackButton,
  },
  name: "About",
};
</script>

<style scoped>
</style>
