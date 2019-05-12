import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import HelloWorld from './HelloWorld'

const stories = storiesOf('HelloWorld', module)
stories.addDecorator(withKnobs)

stories.add('Hello World Component', () => ({
  components: { HelloWorld },
  props: {
    message: {
      default: text('Text', 'Hello World')
    }
  },
  template: '<HelloWorld :message="message"/>',
  notes: 'A small note for this component'
}))
