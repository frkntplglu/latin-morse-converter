<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Kartaca APP</a>
      <ul class="navbar-nav ml-auto">
        <router-link
        active-class="active" 
        to="/"
        exact
        tag="li">
          <a class="nav-link">Latin to Morse</a>
        </router-link>

        <router-link 
        active-class="active" 
        to="morse-to-latin"
        tag="li">
          <a class="nav-link">Morse to Latin</a>
        </router-link>
      </ul>
    </nav>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>