import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import '../src/styles/index.scss'
import './styles.scss'
import {Button, Input, Form} from '../src/primitives'

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')}>Default Button</Button>
  ))
  .add('Primary', () => (
    <Button onClick={action('clicked')} primary>Primary Button</Button>
  ))
  .add('Inverted', () => (
    <Button onClick={action('clicked')} inverted>Inverted Button</Button>
  ))

storiesOf('Input', module)
  .add('Default', () => (
    <Input onChange={action('changed')} onFocus={action('focused')}/>
  ))
  .add('Multi-line', () => (
    <Input multiLine/>
  ))
  .add('Radio', () => (
    <Input type="radio"/>
  ))
  .add('Checkbox', () => (
    <Input type="checkbox"/>
  ))

storiesOf('Card', module)
  .add('Default', () => (
    <div className="card w-1/4">ABC</div>
  ))

storiesOf('Navbar', module)
  .add('Default', () => (
    <nav className="navbar">
      <Input className="w-48 ml-auto"/>
    </nav>
  ))

storiesOf('Dropdown', module)
  .add('Visible', () => (
    <div className="dropdown dropdown-show">
      <ul className="dropdown-menu">
        <li className="menu-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li className="menu-header">Header</li>
        <li><a href="#">Item</a></li>
        <li><a href="#" className="menu-divider">Item</a></li>
        <li><a href="#">Item</a></li>
      </ul>
    </div>
  ))
  .add('Hover', () => (
    <div>
      <Button primary>Hover me</Button>
      <div className="dropdown">
        <ul className="dropdown-menu">
          <li className="menu-active"><a href="#">Active</a></li>
          <li><a href="#">Item</a></li>
          <li className="menu-header">Header</li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
        </ul>
      </div>
    </div>
  ))
  .add('Click', () => (
    <div>
      <Button data-trigger="click" primary>Click me</Button>
      <div className="dropdown">
        <ul className="dropdown-menu">
          <li className="menu-active"><a href="#">Active</a></li>
          <li><a href="#">Item</a></li>
          <li className="menu-header">Header</li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
        </ul>
      </div>
    </div>
  ))

storiesOf('Menu', module)
  .add('Nav', () => (
    <ul className="menu-horizontal">
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ul>
  ))

const schema = [
  {label: 'venue'},
  {label: 'fee', type: 'number'},
  {label: 'refundable', type: 'toggle'},
  {type: 'submit', children: 'Submit'}
]

storiesOf('Form', module)
  .add('Default', () => (
    <Form schema={schema}/>
  ))
  .add('Inline', () => (
    <Form schema={schema} inline/>
  ))
  .add('Stack', () => (
    <Form schema={schema} stack/>
  ))
