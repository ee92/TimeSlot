const React = require('react')
const ReactDOM = require('react-dom')
var Main = require('./components/Main')
import 'normalize.css/normalize.css'
import './styles/styles.css'

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
)
