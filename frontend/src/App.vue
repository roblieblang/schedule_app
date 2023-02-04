<template>
  <div id="app">
    <!-- add a side nav bar component later -->
    <div class="container flex-grow-1">
      <error />
      <div class="mt-5">
        <router-view />
      </div>
    </div>
    <div>
      <h1 class="bg-success">Schedule Optimizer</h1>
      <p>Your schedule needs improvement!</p>
    </div>
    <footer class="bg-light p-3">
      <p>this is some text in the footer</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
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
