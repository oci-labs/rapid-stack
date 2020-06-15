<!--
 Object Computing Incorporated
 Product: Rapid Stack
 Author: Dorian Yeager
 
 License: MIT
-->
<template>
  <div id="account">
    <label>{{message}}</label>
    <label>{{user.username}}</label>
    <button @click="logout">Log Out</button>
    <button @click="changePassword">Change Password</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "account",
  data() {
    return {
      user: {},
      message: ""
    };
  },
  methods: {
    logout: function(event) {
      localStorage.removeItem("token");
      this.$router.push({ name: "login", params: { next: "/" } });
    },
    changePassword: function(event) {
      this.$router.push({ name: "changePassword" });
    }
  },
  mounted: async function() {
    try {
      let result = await axios.get("api/user", {
        params: {},
        headers: { Authorization: "bearer " + localStorage.getItem("token") }
      });
      this.user = result.data.value;
    } catch (e) {
      if (e.response.data.message === "Login required") {
        localStorage.removeItem("token");
        this.$router.push({ name: "login", params: { next: "/account" } });
      } else if (e.result.data.message) {
        this.message = e.response.data.message;
      } else {
        this.message = "Unable to retreive user details at this time";
      }
    }
  }
};
</script>