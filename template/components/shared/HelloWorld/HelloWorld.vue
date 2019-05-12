<template>
  <h1
    class="font-bold text-5xl"
    v-text="message"
  />
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

