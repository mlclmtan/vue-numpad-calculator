<template>
  <div id="container">
    <div class="budget">
      <span>Budget: </span>
      <input type="text" :placeholder="budget" v-model="budget" />
    </div>
    <input
      class="input-number"
      readonly="true"
      type="text"
      placeholder="price per unit"
      :value="current"
    />
    <div class="result">
      <span>{{ unitsToBuy }} {{ unitsToBuy !== '' ? 'unit(s)' : '' }}</span>
    </div>
    <ul class="numpad">
      <li v-ripple @click="append('1')">1</li>
      <li v-ripple @click="append('2')">2</li>
      <li v-ripple @click="append('3')">3</li>
      <li v-ripple @click="append('4')">4</li>
      <li v-ripple @click="append('5')">5</li>
      <li v-ripple @click="append('6')">6</li>
      <li v-ripple @click="append('7')">7</li>
      <li v-ripple @click="append('8')">8</li>
      <li v-ripple @click="append('9')">9</li>
      <li v-ripple @click="dot()">.</li>
      <li v-ripple @click="append('0')">0</li>
      <li v-ripple @click="del()">
        <img
          width="25"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACvUlEQVRoge2Yz0sUYRjHP8+M1iFQCOzHKcj1B7QWtRN2C7JOdjK8dot1t65F/gseOki5Tv0JpkHQyR8hESS7Wwc3UHcNOhUrCBqdcufpopI6uj9mZjWZz+ll5uV5ni/v+37neQdCQkJCQkJCjg9SzeSYvdws6nwELgVUTzX8UnRKHGcwk+xcrFhIzM40ija/A+4EWFwtrJomV4yKp2vzC46eCIDTTolnFa2IZS89RmUo6Io8sF5WyPXRpT5FxoDKV+8QOFDItZFCzDB0FjhVp3pqZl8hV59/u2A2lOaAs3Wsp2Zct0v3cL7JbNx4y38iAlyExOxMY+kEr1G57CWwKCmBYtl5UBQl5SUXuK2IDzarMJJOtCVVpecgMQJFVelJJ9qSCiNecu4QYqWWngg88BIQQJT+mL3clUlEco44N0F+7JmkrDhi3M4kIrmYvdgp0Ocp59bAd5tVVtQwerLx1vmYvdgpas6Annd/Z7wHznlJJxCgzbqJUW3wWwSAbNrsJz+CuSbYPAeZRCRnpQpRgK2xiE4rnPEljzWazxFwN/uvGAC/RcARbzuqwShtmL3Az6AS7N5aVqoQzSQiuXLWXC3Gl0cXvzuO3AV++xV0m10Wi+gk6ExZa64BA+BzMpIV9D7g+BEU2N9ihRZxnOmYvdyVjXcsqJRu+SFm+4ykB9onUB30GhAo/50IQMyOw55JtA8pvPISEECFsWy8dd5KFaKGGrO4WbvQYqgzZaUK0Wy8Y0HRN15y7mnj/bqbi5JCuFfOYgWKKOMqJDzlc3vYPZxvKp3UD1474HpyvC9WAJu23EsQthwAB37ZA7HlgCjboqQH2icQfVqPYjywVvmfxtH8Sz8uXYEgjFfeNMraQ2AyuGpqZtVUY7BiIdm49UfF6Ae+BlhUNawjjJsYN+YGWvOHXUxISEhISEiIn/wFxNU+P3oRO9sAAAAASUVORK5CYII="
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Numpad",
  props: {},
  data() {
    return {
      current: "",
      budget: 5000,
    };
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
    unitsToBuy() {
      let units = Math.floor(this.budget / this.current / (1 + 0.001425 * 0.3));
      return isFinite(units) ? units : "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container > input {
  font-size: 31px;
  padding: 3px 10px;
  border: 0;
  border-bottom: 2px solid #3498db;
  margin: 0 15px;
  width: 84%;
  outline: 0;
  text-align: right;
  border-radius: 0;
  color: #3498db;
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

.result {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  font-size: 1.5rem;
}

.numpad {
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  width: 320px;
}

.numpad li {
  font-size: 32px;
  float: left;
  list-style: none;
  text-align: center;
  height: 65px;
  padding-top: 15px;
  width: 33.33%;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
