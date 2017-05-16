<template>
  <div id="app">
    <transition name="fade">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import "../scss/docs";
</style>
