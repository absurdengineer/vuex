<template>
  <div class="counter-squared">
    ({{ $store.state.counter }}) <sup>2</sup> =
    {{ $store.getters.counterSquare }}
  </div>
</template>

<script>
export default {
  name: "CounterSquare",
};
</script>

<style></style>
