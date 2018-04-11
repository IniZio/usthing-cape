import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({primary, inverted, small, plain, className, ...rest}) => (
  <button
    type="button"
    className={
      classnames(
        'btn',
        {
          'btn-primary': primary,
          'btn-inverted': inverted,
          'btn-small': small,
          'btn-plain': plain
        },
        className
      )}
    {...rest}
  />
)

Button.defaultProps = {
  className: '',
  primary: false,
  inverted: false,
  small: false,
  plain: false
}

Button.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  inverted: PropTypes.bool,
  small: PropTypes.bool,
  plain: PropTypes.bool
}

export default Button
