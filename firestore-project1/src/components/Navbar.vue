<template>
  <nav>
    <div id="nav" class="nav-wrapper green">
      <ul class="row">
        <li v-for="(menu,i) in gnb " v-bind:key="`${menu.name}-${i}`" v-bind:class="`col s2`">
          <router-link v-bind:to="{ name: menu.name }" class="white-text">{{menu.name}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      user: [],
      gnb: [
        { name: 'dashboard' },
        { name: 'new' },
        { name: 'edit' },
        { name: 'add' },
        { name: 'employeeview' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
