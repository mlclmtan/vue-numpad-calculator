<template>
  <div id="app">
    <Numpad />
    <Table />
  </div>
</template>

<script>
import Numpad from "./components/Numpad";
import Table from "./components/Table";

export default {
  name: "App",
  components: {
    Numpad,
    Table
  }
};
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
