import Vue from 'vue'
import Vuex from 'vuex'
import { configure, addParameters, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered/vue'

import '../assets/style.css'

const viewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1200px',
      height: '1000px'
    }
  },
  ipadProLandscape: {
    name: 'iPad Pro Landscape',
    styles: {
      width: '1366px',
      height: '1024px'
    }
  },
  ipadProPortrait: {
    name: 'iPad Pro Portrait',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  }
}

addParameters({ viewport: viewports })

addDecorator(centered)

Vue.use(Vuex)

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module)
