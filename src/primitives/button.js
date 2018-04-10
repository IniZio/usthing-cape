import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({primary, ...rest}) => (
  <button
    type="button"
    className={`btn ${classnames({
      'btn-primary': primary
    })}`}
    {...rest}
  />
)

Button.defaultProps = {
  primary: false
}

Button.propTypes = {
  primary: PropTypes.bool
}

export default Button
