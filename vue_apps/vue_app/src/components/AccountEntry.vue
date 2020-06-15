<template>
  <div id="account">
    <h1>{{ headerText }}</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" @click="submit">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: "AccountEntry",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      this.$emit("accountEntrySubmit", this.input);
    }
  },
  props: {
    buttonText: String,
    headerText: String
  }
};
</script>

<style scoped>
#account {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>