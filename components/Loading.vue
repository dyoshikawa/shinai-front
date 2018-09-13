<template>
  <div
    class="box"
  >
    <div class="rotate-anime">
      <img
        src="~/static/turtle.png"
        class="turtle"
      >
    </div>
  </div>  
</template>

<script>
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.turtle {
  width: 100%;
}
.rotate-anime {
  width: 40px;
  animation: rotate-anime 3s linear infinite;
}
@keyframes rotate-anime {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
