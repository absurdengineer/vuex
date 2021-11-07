<template>
  <div :style="{ color: $store.state.colorCode }" class="counter">
    {{ $store.state.counter }}
  </div>
</template>

<script>
export default {
  name: "Counter",
};
</script>

<style></style>
