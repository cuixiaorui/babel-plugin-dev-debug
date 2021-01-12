<template>
  <div>
    example
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    const handleClick = () => {
      console.log("click");
      if (DEBUG) {
        console.log("for debug")
        const a = 10;
        const b = 20;
        console.log(a + b);
      }
    };

    return {
      handleClick,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
