import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import '../src/styles/index.scss'
import Button from '../src/primitives/button'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')} className="btn-primary">Hello Button</Button>
  ))
