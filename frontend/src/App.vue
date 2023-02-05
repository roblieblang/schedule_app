<template>
  <div id="app" class="d-flex flex-column h-100">
    <nav-bar />
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
      
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Error from "./components/Error.vue";

export default {
  name: 'App',
  components: {
    NavBar, 
    Error
    
  }
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
