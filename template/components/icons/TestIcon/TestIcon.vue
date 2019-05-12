<template>
  <span
    :style="rotate ? { transform: `rotate(${rotate}deg)` } : ''"
    class="inline-block transition-default"
  >
    <svg
      viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        :fill="color"
        fill-rule="evenodd"
      >
        <path
          v-if="icon === 'default'"
          d="M11.37 41a2.4 2.4 0 0 1-1.67-.68 2.28 2.28 0 0 1 0-3.27L26.13 21 9.7 4.95a2.28 2.28 0 0 1 0-3.27c.92-.9 2.42-.9 3.35 0l18.11 17.68c.93.9.93 2.37 0 3.28l-18.1 17.68c-.47.45-1.08.68-1.69.68z"
        />
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    color: {
      required: true,
      type: String,
      default: 'currentColor'
    },
    icon: {
      type: String,
      default: 'default'
    },
    rotate: {
      type: String,
      default: null
    }
  }
}
</script>
