<!--
 Object Computing Incorporated
 Product: Rapid Stack
 Author: Dorian Yeager
 
 License: MIT
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <a href="/api/hello">test</a>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
