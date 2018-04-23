import React from 'react'
import PropTypes from 'prop-types'
import classes from 'classnames'
import * as R from 'ramda'
import RSelect, {Option} from 'rc-select'
// import 'rc-select/assets/index.css'

import {Input} from '.'

const Select = ({creatable, readonly, className, choices, value, ...rest}) => (
  <RSelect
    getInputElement={props => <Input {...props}/>}
    prefixCls="select"
    dropdownClassName="menu"
    className={classes(className)}
    {...rest}
  >{
      choices.map(choice => {
        const label = R.propOr(R.propOr(choice, 'value', choice), 'label', choice)
        const val = R.propOr(R.propOr(choice, 'label', choice), 'value', choice)
        return (
          <Option key={val} value={val}>{label}</Option>
        )
      })
    }
  </RSelect>
)

Select.defaultProps = {
  creatable: false,
  readonly: false,
  className: '',
  choices: [],
  value: null
}

Select.propTypes = {
  creatable: PropTypes.bool,
  readonly: PropTypes.bool,
  className: PropTypes.string,
  choices: PropTypes.array,
  value: PropTypes.any
}

export default Select
