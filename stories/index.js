import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import '../src/styles/index.scss'
import {Button} from '../src/primitives'

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')} className="btn" type="button">Default Button</Button>
  ))
  .add('Primary', () => (
    <button onClick={action('clicked')} className="btn btn-primary" type="button">Hello Button</button>
  ))
