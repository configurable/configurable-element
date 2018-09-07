<template>
  <div>
    wangmeng
    <p>{{a}}</p>
    <p>{{b}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1
    }
  },
  mounted() {
    setTimeout(() => {
      this.a++
    }, 1000)
  },
  computed: {
    b() {
      let b = this.a
      console.log(b)

      return b
    }
  }
};
</script>

<style lang="postcss">
</style>