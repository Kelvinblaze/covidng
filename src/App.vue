<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// Slabo and Roboto Font Url Link
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Slabo+27px&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

:root {
  --main-bg-color: #fefffe;
  --primary-bg-color: #212b45;
  --primary-text-color: #ffffff;
  --white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-secondary {
  font-family: Slabo 27px;
  color: var(--main-bg-color);
}
</style>
