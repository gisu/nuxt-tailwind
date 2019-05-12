<template>
  <div>
    <HelloWorld :message="message" />
  </div>
</template>

<script>
import HelloWorld from '@/components/shared/HelloWorld/HelloWorld'

export default {
  name: 'Homepage',
  head: {
    title: 'Welcome',
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  },
  components: { HelloWorld },
  data () {
    return {
      message: 'hello.world'
    }
  }
}
</script>
