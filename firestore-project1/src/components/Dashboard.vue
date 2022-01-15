<template>
  <div class="intro">
    <h2>introduce</h2>
    <ul>
      <li v-for="items in userId">
        {{items}}
      </li>
    </ul>
  </div>
</template>
<script>
import {db} from '../main.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      userId: []
    }
  },
  mounted() {
    db.collection("user").get().then((querySnapshot) => {
      querySnapshot.forEach((doc,i) => {
        this.userId.push(doc.data().name)
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
