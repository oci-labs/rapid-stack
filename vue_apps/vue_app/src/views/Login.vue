<!--
 Object Computing Incorporated
 Product: Rapid Stack
 Author: Dorian Yeager
 
 License: MIT
-->
<template>
  <div id="login">
    <AccountEntry headerText="login" buttonText="login" @accountEntrySubmit="login" />
    <router-link to="/createAccount">Ceate Account</router-link>
    <label>{{message}}</label>
  </div>
</template>

<script>
import axios from "axios";
import AccountEntry from "@/components/AccountEntry.vue";
export default {
  props: ["next"],
  name: "login",
  data() {
    return {
      message: ""
    };
  },
  components: {
    AccountEntry
  },
  methods: {
    login: async function(input) {
      if (input.username === "" || input.password === "") {
        console.log("A username and password must be present");
        return;
      }
      try {
        let result = await axios.post("api/login", input);
        localStorage.setItem("token", result.data.token);
        if (this.next) {
          this.$router.push(this.next);
        } else {
          this.$router.push("/");
        }
      } catch (e) {
        if (e.response.data.message) {
          this.message = e.response.data.message;
        } else {
          this.message = "Unable to log in at this time";
        }
      }
    }
  }
};
</script>