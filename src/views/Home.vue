<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <counter />
    <counter-square />
    <buttons />
    <color-code />
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue";
import Counter from "../components/Counter.vue";
import ColorCode from "../components/ColorCode.vue";
import CounterSquare from "../components/CounterSquare.vue";

export default {
  name: "Home",
  components: { Buttons, Counter, ColorCode, CounterSquare },
};
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  margin: 0 10px;
  width: 100px;
}
</style>
