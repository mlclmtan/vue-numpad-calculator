<template>
  <div id="app">
    <Numpad />
  </div>
</template>

<script>
import Numpad from './components/Numpad.vue'

export default {
  name: 'App',
  components: {
    Numpad
  }
}
</script>

<style>
body { 
  margin: 0; 
  padding: 0; 
  font-family: 'Open Sans', sans-serif; 
  color: #3498db;
  width: 320px;
  height: 400px;
  margin: auto;
}
</style>
