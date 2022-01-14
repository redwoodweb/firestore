<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul id="example-1">
      <li v-for="item in user">
        {{ item }}
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import {db} from './main.js'

export default {
  name: 'App',
  data() {
    return{
      user: []
    }
  },
  mounted() {
    db.collection("user").get().then((querySnapshot) => {
        querySnapshot.forEach((doc,i) => {            
            console.log(doc.id, " => ", doc.data());
            this.user.push(doc.data().name)
        });
    });
  }
}
</script>

<style lang="scss">
ul,li { list-style: none; }
body { background: red; }
body {
  #app{
    background: yellow;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
