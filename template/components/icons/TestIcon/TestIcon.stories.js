import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withKnobs, color, number, select } from '@storybook/addon-knobs'
import TestIcon from './TestIcon'

const stories = storiesOf('TestIcon', module)
stories.addDecorator(withKnobs)

stories.add('Icon: Testicon', () => ({
  components: { TestIcon },
  props: {
    color: {
      default: color('Color', '#000')
    },
    rotate: {
      default: number('Rotate', 0, { range: true, min: 0, max: 360, step: 45 })
    },
    icon: {
      default: select('Select Icon', { default: 'default', newicon: '' }, 'default')
    }
  },
  template: '<TestIcon :color="color" :rotate="rotate" :icon="icon" class="w-10 h-10"/>',
  notes: 'A small note for this component'
}))
