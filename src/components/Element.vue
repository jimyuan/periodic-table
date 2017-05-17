<template>
  <article class="element" :style="{backgroundColor: `#${element.cpkHexColor}`}">
    <div :data-number="element.atomicNumber">
      <span v-text="element.cnName"></span>
      <span>{{ element.atomicMass | massFormatter }}</span>
    </div>
  </article>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {
      element: this.data
    }
  }
}
</script>
