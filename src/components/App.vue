<template>
  <div id="app">
    <nav>
      <div class="nav-zone">
        <span :class="{'cur-ver': ver === 'cn'}" @click="changeVersion('cn')">中</span>
        <span :class="{'cur-ver': ver === 'en'}" @click="changeVersion('en')"> EN</span>
      </div>
    </nav>
    <transition name="fade">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    ver: state => state.version
  }),
  methods: {
    changeVersion (ver) {
      this.ver !== ver && this.$store.commit('setVer', ver)
    }
  }
}
</script>

<style lang="scss">
@import "../scss/docs";
</style>
