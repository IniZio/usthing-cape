import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({multiLine, className, readonly, ...rest}) => (
  multiLine ?
    <textarea className={
      classnames(
        {
        },
        className
      )
    } {...rest}/> :
    <input
      type="text"
      className={
        classnames(
          {
            [rest.type || '']: true
          },
          className
        )
      }
      {...rest}
      readOnly={readonly ? 'readonly' : ''}
    />
)

Input.defaultProps = {
  multiLine: false,
  className: '',
  readonly: false
}

Input.propTypes = {
  multiLine: PropTypes.bool,
  className: PropTypes.string,
  readonly: PropTypes.bool
}

export default Input
