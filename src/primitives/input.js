import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({multiLine, className, ...rest}) => (
  multiLine ?
    <textarea {...rest}/> :
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
    />
)

Input.defaultProps = {
  multiLine: false,
  className: ''
}

Input.propTypes = {
  multiLine: PropTypes.bool,
  className: PropTypes.string
}

export default Input
