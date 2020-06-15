<!--
 Object Computing Incorporated
 Product: Rapid Stack
 Author: Dorian Yeager
 
 License: MIT
-->
<template>
  <div id="ChangePassword">
    <input type="password" name="newPassword1" v-model="newPassword1" placeholder="New Password" />
    <input
      type="password"
      name="newPassword2"
      v-model="newPassword2"
      placeholder="New Password Again"
    />
    <button type="button" @click="submit">Update Password</button>
    <label>{{message}}</label>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["next"],
  name: "account",
  data() {
    return {
      newPassword1: "",
      newPassword2: "",
      message: ""
    };
  },
  methods: {
    submit: async function(event) {
      try {
        if (!(this.newPassword1 && this.newPassword2)) {
          this.message = "You must enter all fields";
          return;
        }
        if (this.newPassword1 !== this.newPassword2) {
          this.message = "New passwords must match";
          return;
        }
        let result = await axios.post(
          "api/changePassword",
          { password: this.newPassword1 },
          { headers: { Authorization: "bearer " + localStorage.getItem("token") } }
        );
        this.$router.go(-1);
      } catch (e) {
        if (e.response.data.message) {
          if (e.response.data.message === "Login required") {
            localStorage.removeItem("token");
            this.$router.push({
              name: "login",
              params: { next: "/changePassword" }
            });
          } else {
            this.message = e.response.data.message;
          }
        } else {
          this.message = "Unable to update password at this time";
        }
      }
    }
  }
};
</script>