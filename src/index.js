import React from 'react'
import ReactDOM from 'react-dom'
import Report from './Report.jsx'
import './styles.css'

// Module API

export function renderReport(report, element) {
  ReactDOM.render(React.createElement(Report, {report}, null), element)
}
