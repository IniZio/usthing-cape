import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import '../src/styles/index.scss'
import {Button} from '../src/primitives'

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')} type="button">Default Button</Button>
  ))
  .add('Primary', () => (
    <Button onClick={action('clicked')} type="button" primary>Hello Button</Button>
  ))
