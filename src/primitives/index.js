import Button from './button'

export {
  Button
}

export default null
// export (
//   r => r.keys()
//     // Assign according to filename
//     .reduce((acc, key) => ({...acc, [/\/(.*)\.js$/.exec(key)[1].replace(/\b\w/g, l => l.toUpperCase())]: r(key)}), {})
// )(require.context('./', true, /\.js$/))
