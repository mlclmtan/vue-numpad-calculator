<template>
  <div id="container">
    <table>
  <tr>
    <th colspan="2">{{total}}</th>
  </tr>
  <tr>
    <td>Add +</td>
    <td>Deduct -</td>
  </tr>
  <tr>
    <td><input type="number" v-model.number="add1" /></td>
    <td><input type="number" v-model.number="minus1" /></td>
  </tr>
  <tr>
    <td><input type="number" v-model.number="add2" /></td>
    <td><input type="number" v-model.number="minus2" /></td>
  </tr>
  <tr>
    <td><input type="number" v-model.number="add3" /></td>
    <td><input type="number" v-model.number="minus3" /></td>
  </tr>
  <tr>
    <td><input type="number" v-model.number="add4" /></td>
    <td><input type="number" v-model.number="minus4" /></td>
  </tr>
  <tr>
    <td><input type="number" v-model.number="add5" /></td>
    <td><input type="number" v-model.number="minus5" /></td>
  </tr>
  
</table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {},
  data() {
    return {
      add1: 0,
      add2: 0,
      add3: 0,
      add4: 0,
      add5: 0,
      minus1: 0,
      minus2: 0,
      minus3: 0,
      minus4: 0,
      minus5: 0,
    };
  },
  watch: {
    add1: function(newValue) {
      const result = newValue.replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.nextTick(() => this.price = result);
    }
  },
  methods: {
    append(number) {
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    del() {
      this.current = this.current.slice(0, -1);
    },
  },
  computed: {
    total() {
      return this.add1+this.add2+this.add3+this.add4+this.add5-this.minus1-this.minus2-this.minus3-this.minus4-this.minus5;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  text-align: center;
}
#container input {
  font-size: 18px;
  border: 0;
  width: 84%;
  color: #3498db;
}
table, td, th {
  border: 1px solid black;
}
td, th {
  border: 1px solid black;
  padding: 10px 15px;
}
.budget > input {
  font-size: 0.75rem;
  border: 0;
  outline: 0;
  color: #ccc;
}
.budget > span {
  font-size: 0.75rem;
  color: #ccc;
}

::-webkit-input-placeholder {
  color: #ccc;
}
:-moz-placeholder {
  color: #ccc;
}
::-moz-placeholder {
  color: #ccc;
}
:-ms-input-placeholder {
  color: #ccc;
}

#container {
  width: 320px;
  height: 430px;
  position: relative;
  border: 1px solid #eee;
  margin-top: 20px;
}
</style>
