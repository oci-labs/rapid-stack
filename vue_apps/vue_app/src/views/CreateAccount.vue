<!--
 Object Computing Incorporated
 Product: Rapid Stack
 Author: Dorian Yeager
 
 License: MIT
-->
<template>
  <div id="create_account">
    <AccountEntry
      headerText="create account"
      buttonText="create"
      @accountEntrySubmit="createAccount"
    />
    <label>{{message}}</label>
  </div>
</template>

<script>
import axios from "axios";
import AccountEntry from "@/components/AccountEntry.vue";
export default {
  name: "create_account",
  data() {
    return {
      message: ""
    };
  },
  components: {
    AccountEntry
  },
  methods: {
    createAccount: async function(input) {
      if (input.username === "" || input.password === "") {
        console.log("A username and password must be present");
        return;
      }
      try {
        let result = await axios.post("/api/user", input);
        localStorage.setItem("token", result.data.token);
        this.$router.push("/");
      } catch (e) {
        if (e.response.data.message) {
          this.message = e.response.data.message;
        } else {
          this.message = "Unable to create account at this time";
        }
      }
    }
  }
};
</script>