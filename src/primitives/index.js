import Button from './button'
import Input from './input'
import Form from './form'
import Select from './select'

export {
  Button,
  Input,
  Form,
  Select
}

export default null
// export (
//   r => r.keys()
//     // Assign according to filename
//     .reduce((acc, key) => ({...acc, [/\/(.*)\.js$/.exec(key)[1].replace(/\b\w/g, l => l.toUpperCase())]: r(key)}), {})
// )(require.context('./', true, /\.js$/))
