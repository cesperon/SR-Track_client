<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- allows access to componenets from app.vue -->
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans&family=Roboto:wght@300&display=swap");
html,
body {
  margin: 0;
  height: 100%;
  background: rgb(238, 240, 243);
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
