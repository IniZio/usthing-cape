import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as R from 'ramda'

import {Button, Input} from '.'

const defaultMapper = spec => {
  switch (spec.type) {
    case 'image': return p => <Input {...p} type="file"/>
    case 'label': return p => <label {...p}/>
    case 'toggle': return p => <Input {...p} type="checkbox"/>
    case 'button':
    case 'submit': return p => <Button {...p} primary={spec.type === 'submit'}/>
    default: return p => <Input {...p}/>
  }
}

const specToLabel = spec => spec.label || spec.field
const specToField = spec => spec.field || spec.label

class Form extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    let nextState = null
    if (!R.equals(nextProps.value, prevState.form)) {
      nextState = {...nextState, form: nextProps.value}
    }

    if (!R.equals(nextProps.schema, prevState.schema)) {
      nextState = {...nextState, schema: nextProps.schema}
    }
    return nextState
  }

  state = {
    form: {},
    schema: []
  }

  shouldComponentUpdate = () => false

  render() {
    const {mapper, schema, value, onChange, onSubmit, inline, stack, className, ...rest} = this.props
    return (
      <form {...rest} onChange={e => onChange(e, this.state.form)} onSubmit={e => onSubmit(e, this.state.form)} className={classnames(className, {'inline-flex': inline})}>
        {
          this.props.children ||
          this.state.schema.map((spec, key) => {
            const Field = mapper(spec) || defaultMapper(spec)
            const Label = mapper({type: 'label'}) || defaultMapper({type: 'label'})
            const field = specToField(spec)
            const label = specToLabel(spec)
            const Section = (label || !(inline || stack)) ? p => <div {...p}/> : Fragment
            return (
              <Section key={field || key} className={classnames({'md:flex md:items-center': inline || !stack, 'mx-4': inline, 'my-6': !inline})}>
                {(label || !(inline || stack)) && <Label htmlFor={field} className={classnames({'md:mx-2 md:w-1/4': !inline && !stack})}>{label}</Label>}
                <div className={classnames({'md:mx-2 md:w-3/4': !inline && !stack})}>
                  <Field
                    name={field}
                    value={this.state.form[field]}
                    onChange={({target: {value}}) => {
                      this.setState(state => {
                        state.form[field] = value
                        return state
                      })
                      this.props.onChange({...this.state.form, [field]: value})
                    }}
                    {...spec}
                    className={classnames({'md:mx-3': inline || !stack})}
                  />
                </div>
              </Section>
            )
          })
        }
      </form>
    )
  }
}

Form.defaultProps = {
  schema: [],
  mapper: () => {},
  value: {},
  onChange: () => {},
  onSubmit: () => {},
  inline: false,
  className: '',
  children: null,
  stack: false
}

Form.propTypes = {
  schema: PropTypes.array,
  mapper: PropTypes.func,
  value: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  inline: PropTypes.bool,
  stack: PropTypes.bool,
  children: PropTypes.element
}

export default Form
